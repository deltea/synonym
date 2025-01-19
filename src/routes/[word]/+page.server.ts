import type { PageServerLoad } from "./$types";
import { THESARUS_KEY } from "$env/static/private";

export const load = (async ({ params }) => {
  const word = params.word.toLowerCase();
  const result = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${THESARUS_KEY}`);
  const data = await result.json();
  // console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let definitions: any[] = [];
  let valid = true;
  if (data.length > 0 && data[0].meta && data.filter((d: any) => d.meta.id.toLowerCase() === word).length > 0) {
    definitions = data.filter((d: any) => d.meta.id.toLowerCase() === word).map((d: any) => {
      return {
        partOfSpeech: d.fl,
        description: d.shortdef[0],
        synonyms: d.meta.syns[0],
      };
    });
  } else {
    definitions = data;
    valid = false;
  }
  console.log(definitions, valid);

  return { word, definitions, valid };
}) satisfies PageServerLoad;
