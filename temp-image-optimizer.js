
        const sharp = require('sharp');
        const glob = require('glob');
        
        async function optimizeImages() {
          const images = glob.sync('public/**/*.{jpg,jpeg,png,webp}');
          for (const image of images) {
            try {
              await sharp(image)
                .webp({ quality: 80 })
                .toFile(image.replace(/\.(jpg|jpeg|png)$/, '.webp'));
            } catch (err) {
              console.log('Skipping', image);
            }
          }
        }
        
        optimizeImages();
      