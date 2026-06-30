build:
  deno run --allow-all src/build.ts

watch:
  watchexec -w src just build

serve:
  miniserve dist --index index.html
