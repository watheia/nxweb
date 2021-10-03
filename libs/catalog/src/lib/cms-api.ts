/**
 * Copyright 2021 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Author, Post } from '../types';

import * as strapiApi from './cms-providers/strapi';
import * as datoCmsApi from './cms-providers/dato';

let cmsApi: {
  getAllAuthors: () => Promise<Author[]>;
  getAllPosts: () => Promise<Post[]>;
};

if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
  cmsApi = datoCmsApi;
} else if (process.env.STRAPI_API_URL) {
  cmsApi = strapiApi;
} else {
  cmsApi = {
    getAllAuthors: async () => Promise.resolve([]),
    getAllPosts: async () => Promise.resolve([])
  };
}

export async function getAllAuthors(): Promise<Author[]> {
  return cmsApi.getAllAuthors();
}

export async function getAllPosts(): Promise<Post[]> {
  return cmsApi.getAllPosts();
}
