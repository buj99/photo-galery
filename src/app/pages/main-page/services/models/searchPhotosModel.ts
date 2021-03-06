import { Photo } from './photoModel';

export interface SearchPhotosModel {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}
