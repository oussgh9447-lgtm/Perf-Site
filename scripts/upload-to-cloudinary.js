/**
 * Upload Script for Cloudinary
 * Uploads all images and videos from /public to Cloudinary
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dnxarwdjo',
  api_key: '844767394992415',
  api_secret: 'ZqkwDiZXNEY0ShKtbsnY2bsKWG0',
});

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const UPLOAD_FOLDER = 'perf-analysis';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.avi'];

async function uploadFile(filePath, folder) {
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  const publicId = `${folder}/${relativePath.replace(/\.[^/.]+$/, '').replace(/\\/g, '/')}`;

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: folder,
      overwrite: true,
      resource_type: 'auto',
    });

    console.log(`✅ ${relativePath}`);
    console.log(`   → ${result.secure_url}\n`);
    
    return { local: relativePath, cloudinary: result.secure_url, publicId };
  } catch (error) {
    console.error(`❌ ${relativePath}: ${error.message}\n`);
    return null;
  }
}

async function walkDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await walkDirectory(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext) || VIDEO_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }

  return fileList;
}

async function main() {
  console.log('🚀 Cloudinary Upload - Perf Analysis Consulting\n');
  console.log(`☁️  Cloud: dnxarwdjo`);
  console.log(`📁 Source: ${PUBLIC_DIR}`);
  console.log(`📂 Folder: ${UPLOAD_FOLDER}\n`);

  const files = await walkDirectory(PUBLIC_DIR);
  
  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log(`📦 Found ${files.length} files\n`);
  console.log('─'.repeat(60));

  const results = [];
  
  for (const file of files) {
    const result = await uploadFile(file, UPLOAD_FOLDER);
    if (result) results.push(result);
  }

  // Save mapping
  const mappingFile = path.join(__dirname, 'cloudinary-mapping.json');
  fs.writeFileSync(mappingFile, JSON.stringify(results, null, 2));
  
  console.log('─'.repeat(60));
  console.log(`\n✨ Done! ${results.length}/${files.length} files uploaded`);
  console.log(`📄 Mapping: ${mappingFile}\n`);
}

main().catch(console.error);
