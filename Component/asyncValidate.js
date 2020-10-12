const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => { // simulate server latency

    if (['surafel', 'paul', 'george', 'ringo'].includes(values.email)) {
      throw { email: 'That username is taken' };
    }
  });
};

export default asyncValidate;
 
