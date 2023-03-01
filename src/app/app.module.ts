import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./features/header/header.module";
import { TokenInterceptor } from "./services/interceptors/token.interceptor";
import { FavoritesEffects } from "./store/favorites/favorites.effects";
import { favoritesReducer } from "./store/favorites/favorites.reducer";
import { PhotosEffects } from "./store/photos/photos.effects";
import { photosReducer } from "./store/photos/photos.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    StoreModule.forRoot({
      photos: photosReducer,
      favorites: favoritesReducer
    }),
    EffectsModule.forRoot([
      PhotosEffects,
      FavoritesEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
