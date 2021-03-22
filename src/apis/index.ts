// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/*! THIS FILE IS AUTO-GENERATED */

import {VERSIONS as analyticsVersions, analytics} from './analytics';
import {
  VERSIONS as analyticsadminVersions,
  analyticsadmin,
} from './analyticsadmin';
import {
  VERSIONS as analyticsdataVersions,
  analyticsdata,
} from './analyticsdata';
import {
  VERSIONS as analyticsreportingVersions,
  analyticsreporting,
} from './analyticsreporting';

export interface APIList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: {[index: string]: any};
}

export const APIS: APIList = {
  analytics: analyticsVersions,
  analyticsadmin: analyticsadminVersions,
  analyticsdata: analyticsdataVersions,
  analyticsreporting: analyticsreportingVersions,
};

export class GeneratedAPIs {
  analytics = analytics;
  analyticsadmin = analyticsadmin;
  analyticsdata = analyticsdata;
  analyticsreporting = analyticsreporting;
}
