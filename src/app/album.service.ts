import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }
  
  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }

  updateAlbum(localUpdatedAlbum) {
    var albumInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumInFirebase.update({title: localUpdatedAlbum.title,
                            artist: localUpdatedAlbum.artist,
                            description: localUpdatedAlbum.descriptio});
  }
  
  goToDetailPage(clickedAlbum: Album) {
    // this.router.navigate(['albums', clickedAlbum.id]);
  };

  deleteAlbum(album) {
    var albumInFirebase = this.getAlbumById(album.$key);
    albumInFirebase.remove();
  }
}
