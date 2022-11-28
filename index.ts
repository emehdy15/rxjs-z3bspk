import './style.css';

import { of, map, Observable  } from 'rxjs';

function show(log)
{
  console.log('log',log);
}

of(['World',1,3,4,4,5,6,7,8])
  .pipe(map((name) => `Hello, ${name}!`))
  .pipe(map((name) => 2+name+1)) 
  .subscribe(show);

// Open the console in the bottom right to see results.
