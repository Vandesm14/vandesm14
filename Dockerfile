FROM denoland/deno:2.1.4 AS build
WORKDIR /app
COPY . .
RUN deno run --allow-all src/build.ts

FROM scratch
COPY --from=build /app/dist /
