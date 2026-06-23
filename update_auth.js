const fs = require('fs');

const files = [
  'c:/Users/Administrator/Downloads/Truckmitra project12345/Truckmitra-frontend/src/services/api/auth.service.ts',
  'c:/Users/Administrator/Downloads/Truckmitra project12345/Truckmitra-frontend/src/services/api/axiosConfig.ts'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\('\/auth\//g, "('/api/auth/");
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
