import tts from "../test assignment/timetostring.js"

test ('time_to_string', () => {
    expect(tts (20000000)).toEqual("5 hours 33 minutes 20 seconds " );
  });