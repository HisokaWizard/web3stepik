import * as React from 'react';

export const Main = () => {
  const authFunc = React.useCallback(() => {
    const authData = { data: 'Auth on my site' };
    if ('WavesKeeper' in window) {
      (window as any)?.WavesKeeper?.auth(authData)
        ?.then((auth: any) => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
        })
        ?.catch((error: string) => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        });
    } else {
      alert('To Auth WavesKeeper should be installed.');
    }
  }, []);

  return (
    <div className='container'>
      <input className='btn btn-primary' type='submit' value='Alert' onClick={authFunc} />
    </div>
  );
};
