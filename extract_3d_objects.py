from PIL import Image, ImageFilter, ImageDraw
import os

def isolate_object(crop_img, bg_color_test, inner_seeds=None, clean_regions=None):
    img = crop_img.convert('RGBA')
    w, h = img.size
    mask = Image.new('L', (w, h), 255)
    mask_pixels = mask.load()

    seeds = set()
    for x in range(w):
        seeds.add((x, 0))
        seeds.add((x, h - 1))
    for y in range(h):
        seeds.add((0, y))
        seeds.add((w - 1, y))

    if inner_seeds:
        for s in inner_seeds:
            seeds.add(s)

    visited = set()
    queue = []

    for s in seeds:
        if 0 <= s[0] < w and 0 <= s[1] < h:
            visited.add(s)
            r, g, b, _ = img.getpixel(s)
            if bg_color_test(r, g, b, s[0], s[1]):
                queue.append(s)
                mask_pixels[s[0], s[1]] = 0

    while queue:
        cx, cy = queue.pop(0)
        for nx, ny in [(cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)]:
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                visited.add((nx, ny))
                r, g, b, _ = img.getpixel((nx, ny))
                if bg_color_test(r, g, b, nx, ny):
                    mask_pixels[nx, ny] = 0
                    queue.append((nx, ny))

    if clean_regions:
        draw = ImageDraw.Draw(mask)
        for item in clean_regions:
            shape_type = item[0]
            coords = item[1]
            if shape_type == 'rect':
                draw.rectangle(coords, fill=0)
            elif shape_type == 'poly':
                draw.polygon(coords, fill=0)

    # Smooth the mask slightly
    blurred_mask = mask.filter(ImageFilter.GaussianBlur(radius=0.7))
    img.putalpha(blurred_mask)
    return img

def main():
    base_img = Image.open('public/assets/hero-reference.jpg')
    out_dir = 'public/assets'

    # 1. HEADPHONES
    hp_crop = base_img.crop((700, 50, 825, 205))
    def hp_bg(r, g, b, x, y):
        is_light = r > 195 and g > 200 and b > 210
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    hp = isolate_object(hp_crop, hp_bg, inner_seeds=[(55, 75)], clean_regions=[
        ('rect', [0, 85, 25, 155]), # dot / line on bottom-left
        ('rect', [90, 120, 125, 155]) # line on bottom-right
    ])
    hp.save(os.path.join(out_dir, '3d_headphones.png'))
    print('1. Headphones cleanly saved')

    # 2. CALENDAR & CLOCK
    cc_crop = base_img.crop((525, 12, 690, 152))
    def cc_bg(r, g, b, x, y):
        is_light = r > 212 and g > 218 and b > 222 and abs(r - g) < 25
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    cc = isolate_object(cc_crop, cc_bg, clean_regions=[
        ('rect', [0, 95, 25, 140]), # connecting line artifact on left
        ('rect', [135, 125, 165, 140]) # connecting line on right
    ])
    cc.save(os.path.join(out_dir, '3d_calendar_clock.png'))
    print('2. Calendar Clock cleanly saved')

    # 3. FOLDERS STACK
    fs_crop = base_img.crop((255, 20, 435, 155))
    def fs_bg(r, g, b, x, y):
        is_light = r > 205 and g > 212 and b > 218 and abs(r - g) < 25
        is_blue_line = b > r + 30 and b > g + 15 and r > 150
        return is_light or is_blue_line
    fs = isolate_object(fs_crop, fs_bg, clean_regions=[
        ('rect', [0, 85, 30, 135]),
        ('rect', [140, 110, 180, 135])
    ])
    fs.save(os.path.join(out_dir, '3d_folders_stack.png'))
    print('3. Folders Stack cleanly saved')

    # 4. FACTORY
    fa_crop = base_img.crop((115, 50, 275, 205))
    def fa_bg(r, g, b, x, y):
        is_light = r > 205 and g > 212 and b > 218
        is_ground_light = y > 150 and r > 200 and g > 205 and b > 210
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_ground_light or is_blue_line
    fa = isolate_object(fa_crop, fa_bg, clean_regions=[
        ('rect', [0, 130, 42, 155]), # laptop corner
        ('rect', [145, 0, 160, 45]),  # folders binder corner at top-right
        ('rect', [0, 0, 25, 30])
    ])
    fa.save(os.path.join(out_dir, '3d_factory.png'))
    print('4. Factory cleanly saved')

    # 5. DATA LAPTOP
    lp_crop = base_img.crop((30, 195, 200, 330))
    def lp_bg(r, g, b, x, y):
        is_light = r > 205 and g > 210 and b > 215 and abs(r - g) < 25
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    lp = isolate_object(lp_crop, lp_bg, clean_regions=[
        ('rect', [0, 0, 170, 18]), # pavement of factory above
        ('rect', [130, 40, 170, 135]) # connecting blue arc line
    ])
    lp.save(os.path.join(out_dir, '3d_data_laptop.png'))
    print('5. Data Laptop cleanly saved')

    # 6. SERVER RACK
    sr_crop = base_img.crop((95, 325, 225, 458))
    def sr_bg(r, g, b, x, y):
        is_light = r > 195 and g > 200 and b > 210 and abs(r - g) < 25
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    sr = isolate_object(sr_crop, sr_bg, clean_regions=[
        ('poly', [(75, 133), (85, 102), (130, 102), (130, 133)]), # paper stack
        ('rect', [0, 0, 30, 20]) # laptop corner
    ])
    sr.save(os.path.join(out_dir, '3d_server_rack.png'))
    print('6. Server Rack cleanly saved')

    # 7. SECURITY CAMERA
    sc_crop = base_img.crop((825, 110, 978, 245))
    def sc_bg(r, g, b, x, y):
        is_light = r > 228 and g > 232 and b > 238 and abs(r - g) < 20
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    sc = isolate_object(sc_crop, sc_bg, clean_regions=[
        ('rect', [0, 0, 22, 50]), # headphone ear cup tip
        ('rect', [0, 115, 60, 135]) # boxes edge below
    ])
    sc.save(os.path.join(out_dir, '3d_security_camera.png'))
    print('7. Security Camera cleanly saved')

    # 8. SHIPPING BOXES
    sb_crop = base_img.crop((785, 235, 920, 355))
    def sb_bg(r, g, b, x, y):
        is_light = r > 215 and g > 220 and b > 228 and abs(r - g) < 25
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    sb = isolate_object(sb_crop, sb_bg, clean_regions=[
        ('rect', [100, 0, 135, 25]) # camera tip top-right
    ])
    sb.save(os.path.join(out_dir, '3d_shipping_boxes.png'))
    print('8. Shipping Boxes cleanly saved')

    # 9. FORKLIFT
    fk_crop = base_img.crop((835, 335, 1005, 458))
    def fk_bg(r, g, b, x, y):
        is_light = r > 210 and g > 218 and b > 222 and abs(r - g) < 25
        is_blue_line = b > r + 25 and b > g + 15 and r > 150
        return is_light or is_blue_line
    fk = isolate_object(fk_crop, fk_bg, clean_regions=[
        ('rect', [0, 0, 65, 32]) # box corner
    ])
    fk.save(os.path.join(out_dir, '3d_forklift.png'))
    print('9. Forklift cleanly saved')

    # 10. CHARACTER & DESK
    # Full resolution character and desk with clean transparent background
    char_base = base_img.convert('RGBA')
    cw, ch = char_base.size
    char_mask = Image.new('L', (cw, ch), 255)
    char_draw = ImageDraw.Draw(char_mask)

    # Everything outside character & desk is erased:
    # 1. Top region (above character head): y < 160
    char_draw.rectangle([0, 0, cw, 155], fill=0)
    # 2. Left floating items: x < 165
    char_draw.rectangle([0, 0, 165, ch], fill=0)
    # 3. Right floating items: x > 870
    char_draw.rectangle([870, 0, cw, ch], fill=0)

    # 4. Background around character head and shoulders (flood fill from y=156)
    seeds = []
    for x in range(165, 870):
        seeds.append((x, 156))
    
    char_mask_pixels = char_mask.load()
    char_visited = set(seeds)
    char_queue = list(seeds)

    def is_char_bg(r, g, b, x, y):
        # Character hair is dark (r<60, g<60, b<60), hoodie is blue (b > 160, r < 60)
        # Background is light studio gradient: r > 200, g > 205, b > 215
        is_light = r > 200 and g > 205 and b > 215 and abs(r - g) < 25
        is_blue_line = b > r + 30 and b > g + 20 and r > 160
        return is_light or is_blue_line

    while char_queue:
        cx, cy = char_queue.pop(0)
        if cy >= 445: # don't enter laptop or desk
            continue
        r, g, b, _ = char_base.getpixel((cx, cy))
        if is_char_bg(r, g, b, cx, cy):
            char_mask_pixels[cx, cy] = 0
            for nx, ny in [(cx+1, cy), (cx-1, cy), (cx, cy+1), (cx, cy-1)]:
                if 165 <= nx < 870 and 156 <= ny < 445 and (nx, ny) not in char_visited:
                    char_visited.add((nx, ny))
                    nr, ng, nb, _ = char_base.getpixel((nx, ny))
                    if is_char_bg(nr, ng, nb, nx, ny):
                        char_queue.append((nx, ny))

    # Clean character left/right edges above desk
    # Left: servers/laptop area between x 165 and 280, y < 440
    for x in range(165, 300):
        for y in range(156, 440):
            r, g, b, _ = char_base.getpixel((x, y))
            # If not blue sweatshirt and not desk papers
            if y < 440 and (r > 190 and g > 195 and b > 205):
                char_mask_pixels[x, y] = 0
            # Remove any left-over servers
            if x < 230 and y < 450:
                char_mask_pixels[x, y] = 0

    # Right: between x 720 and 870, y < 440
    for x in range(710, 870):
        for y in range(156, 440):
            r, g, b, _ = char_base.getpixel((x, y))
            if y < 440 and (r > 190 and g > 195 and b > 205):
                char_mask_pixels[x, y] = 0
            if x > 840 and y < 450:
                char_mask_pixels[x, y] = 0

    # Smooth the mask
    char_blurred = char_mask.filter(ImageFilter.GaussianBlur(radius=0.8))
    char_base.putalpha(char_blurred)
    char_base.save(os.path.join(out_dir, '3d_character_desk.png'))
    print('10. Character & Desk cleanly saved')

if __name__ == '__main__':
    main()
