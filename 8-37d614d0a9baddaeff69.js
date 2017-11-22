webpackJsonp([8],{683:function(a,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),s.d(n,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:s(789),highlighted:s(790)}},{filename:"custom-date-formatter.provider.ts",contents:{raw:s(791),highlighted:s(792)}},{filename:"template.html",contents:{raw:s(793),highlighted:s(794)}},{filename:"module.ts",contents:{raw:s(795),highlighted:s(796)}}]},789:function(a,n){a.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';\nimport { CustomDateFormatter } from './custom-date-formatter.provider';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"},790:function(a,n){a.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarDateFormatter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { CustomDateFormatter } from <span class="hljs-string">\'./custom-date-formatter.provider\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n'},791:function(a,n){a.exports="import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';\n\nexport class CustomDateFormatter extends CalendarDateFormatter {\n  // you can override any of the methods defined in the parent class\n\n  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);\n  }\n\n  public monthViewTitle({ date, locale }: DateFormatterParams): string {\n    return new Intl.DateTimeFormat(locale, {\n      year: 'numeric',\n      month: 'short'\n    }).format(date);\n  }\n\n  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);\n  }\n\n  public dayViewHour({ date, locale }: DateFormatterParams): string {\n    return new Intl.DateTimeFormat(locale, {\n      hour: 'numeric',\n      minute: 'numeric'\n    }).format(date);\n  }\n}\n"},792:function(a,n){a.exports='<span class="hljs-keyword">import</span> { CalendarDateFormatter, DateFormatterParams } from <span class="hljs-string">\'angular-calendar\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CustomDateFormatter extends CalendarDateFormatter {\n  <span class="hljs-comment">// you can override any of the methods defined in the parent class</span>\n\n  <span class="hljs-keyword">public</span> monthViewColumnHeader({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Intl</span>.DateTimeFormat(locale, { weekday: <span class="hljs-string">\'short\'</span> }).format(date);\n  }\n\n  <span class="hljs-keyword">public</span> monthViewTitle({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Intl</span>.DateTimeFormat(locale, {\n      year: <span class="hljs-string">\'numeric\'</span>,\n      month: <span class="hljs-string">\'short\'</span>\n    }).format(date);\n  }\n\n  <span class="hljs-keyword">public</span> weekViewColumnHeader({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Intl</span>.DateTimeFormat(locale, { weekday: <span class="hljs-string">\'short\'</span> }).format(date);\n  }\n\n  <span class="hljs-keyword">public</span> dayViewHour({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Intl</span>.DateTimeFormat(locale, {\n      hour: <span class="hljs-string">\'numeric\'</span>,\n      minute: <span class="hljs-string">\'numeric\'</span>\n    }).format(date);\n  }\n}\n'},793:function(a,n){a.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-day-view>\n</div>'},794:function(a,n){a.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},795:function(a,n){a.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},796:function(a,n){a.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'}});
//# sourceMappingURL=8-37d614d0a9baddaeff69.js.map