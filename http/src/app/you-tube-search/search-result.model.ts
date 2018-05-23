export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.title = obj && obj.title;
    this.description = obj && obj.description;
    this.thumbnailUrl = obj && obj.thumbnailUrl;
    this.videoUrl = obj && obj.videoUrl;
  }
}
