import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';


// Global DOM
import { WindowRef } from './window-service';
import { LinkService } from './shared/link.service';

// Routing
import { routing } from './app.routes';

// Providers
import { DoctorService } from './shared/doctor.service';
import { EventBusService } from './shared/event-bus.service';
import { ResourcesService } from './filter/resources.service';
import { SearchService } from './shared/search.service';
import { ReferralNurseService } from './shared/referral-nurse.service';
import { SeoService } from './shared/seo-service.service';
import { GtmDatalayerService } from './shared/gtm-datalayer.service';
import { YouTubeCustomService } from './you-tube-custom/you-tube-custom.service';
import { JSUtilityService } from './utilities/jsutility.service';
import { GlobalConfigs } from '../sharp-com-environment-configs/global-configs';
import { GoogleMapsService } from './shared/google-maps.service';
import { PromoProcessor } from './+doctor-list/shared';
import { CanonicalMapper } from './shared/canonical-mapper';



// Components
import { AppComponent } from './app.component';
import { DoctorListComponent } from './+doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { Pluralize } from './utilities/pluralize.component';
import { FilterComponent } from './filter/filter.component';
import { RecentlyViewedDrawerComponent } from './recently-viewed/recently-viewed-drawer.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';

import { LandingComponent } from './landing/landing.component';
import { SecondaryDrawerComponent } from './drawers/doctor-filter/secondary-drawer.component';
import { SpecialtiesDrawerComponent } from './drawers/doctor-filter/specialties-drawer.component';
import { DoctorNameDrawerComponent } from './drawers/landing/doctor-name-drawer/doctor-name-drawer.component';
import { TertiaryDrawerComponent } from './drawers/doctor-filter/tertiary-drawer.component';
import { DrivingDirectionsComponent } from './drawers/driving-directions/driving-directions.component';
import { DrivingDirectionsMapComponent } from './custom-maps/driving-directions-map/driving-directions-map.component';
import { SpinnerComponent } from './utilities/spinner/spinner.component';
import { CollapsableComponent } from './utilities/collapsable/collapsable.component';
import { YouTubeCustomComponent } from './you-tube-custom/you-tube-custom.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarComponent } from './star-rating/star.component';
import { PatientRatingsMessageComponent } from './drawers/patient-ratings-message/patient-ratings-message.component';
import { CharacterWordTruncateComponent } from './character-word-truncate/character-word-truncate.component';

// Attribute Directives
import { HoverDrTileDirective } from './attribute-directives/hover-dr-tile.directive';
import { SquareDimensionsDirective } from './attribute-directives/square-dimensions.directive';
import { SquareDimensionsSwiperDirective } from './attribute-directives/square-dimensions-swiper.directive';
import { ScrollTopDirective } from './attribute-directives/scroll-top.directive';

// Pipes
import { RoundUpPipe } from './pipes/round-up.pipe';
import { FilterOnPropertyPipe } from './pipes/filter-on-property.pipe';
import { AgePipe } from './pipes/age.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { DistinctPipe } from './pipes/distinct.pipe';
import { DomSanitizePipe } from './pipes/dom-sanitize.pipe';
import { OrderBy } from './pipes/order-by.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ValuesPipe } from './pipes/values-pipe.pipe';
import { CleanPhoneNumberPipe } from './pipes/clean-phone-number.pipe';
import { AlsoPracticesInPipe } from './pipes/also-practices-in.pipe';
import { SetLocationDisplayPipe } from './pipes/set-location-display.pipe';
import { SanitizeCharactersPipe } from './pipes/sanitize-characters.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CustomEventDatePipe } from './pipes/custom-event-date.pipe';

// Resolvers
import { DoctorResolver } from "./doctor_resolver";
import { DoctorListResolver } from './+doctor-list/doctor-list-resolver';


// 3rd Party modules
// Google Maps API (angular2-google-maps)
import { AgmCoreModule } from '@agm/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DemoMaterialModule } from './material-module';


// TODO: restore when upstream module definition is fixed
import { KSSwiperModule } from './swiper/swiper.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PatientStatusComponent } from './drawers/choose-doctor/patient-status.component';
import { ScheduleAppointmentComponent } from './drawers/choose-doctor/schedule-appointment.component';
import { NurseReferralComponent } from './drawers/choose-doctor/nurse-referral.component';
import { CallInsuranceComponent } from './drawers/choose-doctor/call-insurance.component';

// Directives 
import { DynamicHostDirective } from './dynamic-component/dynamic-host.directive';
import { OfficeHoursComponent } from './office-hours/office-hours.component';
import { DoctorSearchTilesComponent } from './doctor-search-tiles/doctor-search-tiles.component';
import { CustomAgmComponent } from './custom-maps/custom-agm/custom-agm.component';
import { DoccordionComponent } from './doctor-profile/doccordion/doccordion.component';


@NgModule({
  declarations: [
    AppComponent, DoctorListComponent, DoctorProfileComponent, DoctorNameDrawerComponent, Pluralize, FilterComponent, LandingComponent, RoundUpPipe, FilterOnPropertyPipe, AgePipe, GenderPipe, DistinctPipe, DomSanitizePipe, SortPipe, OrderBy, SecondaryDrawerComponent, SpinnerComponent, CleanPhoneNumberPipe, DrivingDirectionsMapComponent, SpecialtiesDrawerComponent, ValuesPipe, DrivingDirectionsComponent, SquareDimensionsDirective, CollapsableComponent, AlsoPracticesInPipe, RecentlyViewedComponent, RecentlyViewedDrawerComponent, SetLocationDisplayPipe, SquareDimensionsSwiperDirective, HoverDrTileDirective, YouTubeCustomComponent, SanitizeCharactersPipe, TertiaryDrawerComponent, ScrollTopDirective, StarRatingComponent, PatientRatingsMessageComponent, CharacterWordTruncateComponent, StarComponent, CustomDatePipe, CustomEventDatePipe, PatientStatusComponent, ScheduleAppointmentComponent, NurseReferralComponent, CallInsuranceComponent, DynamicHostDirective, OfficeHoursComponent, DoctorSearchTilesComponent, CustomAgmComponent, DoccordionComponent
  ],

  //DEFINE THE EXTERNAL MODULES WE HAVE TO HAVE AVAILABLE TO ALL OF THE COMPONENTS THAT BELONG THIS ANGULAR MODULE
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    NgxYoutubePlayerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBskQC-mRI-OotgILUUOsoBtthWf7LmJdo',
      libraries: ['places']
    }),
    KSSwiperModule,
		routing,
		DemoMaterialModule,
  ],
  providers: [
    WindowRef,
    DoctorService,
    EventBusService,
    GtmDatalayerService,
    ResourcesService,
    SearchService,
    ReferralNurseService,
    SeoService,
    Title,
    Meta,
    LinkService,
    PromoProcessor,
    YouTubeCustomService,
    GoogleMapsService,
    DoctorResolver,
    DoctorListResolver,
    JSUtilityService,
    GlobalConfigs,
    { provide: 'APP_BASE_HREF', useValue: '/san-diego-doctors' },
    CanonicalMapper
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DrivingDirectionsComponent ]
})

export class AppModule { }
