(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{634:function(n,e,s){"use strict";s.r(e),s.d(e,"sources",function(){return a});var a=[{filename:"component.ts",contents:{raw:s(696),highlighted:s(695)}},{filename:"custom-event-title-formatter.provider.ts",contents:{raw:s(694),highlighted:s(693)}},{filename:"template.html",contents:{raw:s(692),highlighted:s(691)}},{filename:"module.ts",contents:{raw:s(690),highlighted:s(689)}}]},689:function(n,e){n.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},690:function(n,e){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},691:function(n,e){n.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},692:function(n,e){n.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-day-view>\n</div>'},693:function(n,e){n.exports="import { LOCALE_ID, Inject } from '@angular/core';\nimport { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\nexport class CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  constructor(@Inject(LOCALE_ID) private locale: string) {\n    super();\n  }\n\n  // you can override any of the methods defined in the parent class\n\n  month(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n\n  week(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n\n  day(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n}\n"},694:function(n,e){n.exports="import { LOCALE_ID, Inject } from '@angular/core';\nimport { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\nexport class CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  constructor(@Inject(LOCALE_ID) private locale: string) {\n    super();\n  }\n\n  // you can override any of the methods defined in the parent class\n\n  month(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n\n  week(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n\n  day(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n}\n"},695:function(n,e){n.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarEventTitleFormatter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { CustomEventTitleFormatter } from <span class="hljs-string">\'./custom-event-title-formatter.provider\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter\n    }\n  ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'An event\'</span>,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      color: colors.red\n    }\n  ];\n}\n'},696:function(n,e){n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';\nimport { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter\n    }\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'An event',\n      start: new Date(),\n      color: colors.red\n    }\n  ];\n}\n"}}]);