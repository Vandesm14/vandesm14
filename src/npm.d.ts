declare module 'markdown-yaml-metadata-parser' {
  export default function metadataParser<T>(source: string): {
    metadata: T;
    content: string;
  };
}
