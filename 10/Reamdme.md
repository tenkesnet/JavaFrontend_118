npx tsc -t es5 .\01-tipusok.ts --outFile main.js -w     

npm install --save-dev browserify  
npm install --save-dev tsify 
npm install --save-dev watchify 
npx watchify src/main.ts -p [ tsify --noImplicitAny] -o dist/main.js