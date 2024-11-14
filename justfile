build:
  deno run --allow-all src/build.ts

watch:
  watchexec -w src just build

serve:
  miniserve dist -p 3000 --index index.html
