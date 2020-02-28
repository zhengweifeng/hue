// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { koSetup } from 'jest/koTestUtils';
import { NAME } from './ko.navTags';
import $ from 'jquery';

import 'ko/bindings/ko.tagEditor';

describe('ko.navTags.js', () => {
  const setup = koSetup();

  it('should render component', async () => {
    const element = await setup.renderComponent(NAME, {
      catalogEntry: {
        isField: () => true,
        isComplex: () => false,
        getChildren: () => $.Deferred().resolve([]),
        getSample: () => $.Deferred().reject(),
        loadNavigatorMetaForChildren: () => $.Deferred().reject(),
        loadNavOptPopularityForChildren: () => $.Deferred().reject(),
        isTableOrView: () => false,
        getSourceType: () => 'impala',
        getNavigatorMeta: () =>
          $.Deferred().resolve({
            tags: ['testTag']
          })
      }
    });

    expect(element.innerHTML).toMatchSnapshot();
  });
});