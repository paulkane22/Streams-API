import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { OverlayModule } from './overlay/overlay.module';
import { EventBusService } from './services/event-bus.service';
import { MainnavComponent } from './mainnav/mainnav.component';



@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MaterialModule
  ],
  exports: [OverlayModule, MainnavComponent],
  declarations: [MainnavComponent],
  providers: [EventBusService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
