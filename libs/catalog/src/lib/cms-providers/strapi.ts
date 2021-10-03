/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
import { Post, Author } from '../../types';

const API_URL = `${process.env.STRAPI_API_URL}/graphql`;
const IMAGE_API_URL = process.env.STRAPI_API_URL;

interface Image {
  url?: string;
}

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

/**
 * The default image url will be '/uploads/...
 * Here we add the IMAGE_API_URL prefix to allow locally stored assets to be displayed
 * @param image
 * @return image object with serialized url
 */
function serializeImage(image: Image) {
  if (!image?.url) return null;
  const imageUrl: string = image.url.startsWith('http') ? image.url : `${IMAGE_API_URL}${image.url}`;

  return {
    ...image,
    sizes: '',
    url: imageUrl
  };
}

/**
 * @param author
 * @returns author object with serialized image
 */
function serializeAuthor(author: Author) {
  return {
    ...author,
    image: {
      ...author.avatar,
      ...serializeImage(author.avatar)
    }
  };
}

export async function getAllAuthors(): Promise<Author[]> {
  const data = await fetchCmsAPI(`
  {
    authors {
      id
      title
      company
      bio
      slug
      name
      image {
        alternativeText
        width
        height
        url
        size
        formats
      }
      twitter
      github
      talk {
        id
        title
        start
        end
        description
      }   
    }
  }  
  `);

  return data.authors.map(serializeAuthor);
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchCmsAPI(`
    {
      posts {
        id
        name
        slug
        stream
        order
        discord
        schedule(sort: "start:asc") {
          id
          title
          start
          end
          description
          author: authors {
            id
            slug
            title
            bio
            name
            image {
              alternativeText
              width
              height
              url
              size
              formats
            }
            twitter
            github
            company
          }
        }
      }
    }
  `);

  return data.posts.map((post: Post) => ({
    ...post,
    //TODO map child props
  }));
}
