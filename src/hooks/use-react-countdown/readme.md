## Installation

Using npm:

```sh
$ npm install use-react-countdown
```

Using yarn:

```sh
$ yarn add use-react-countdown
```

## Quick Start

```javascript
import React from "react";
import useReactCountdown from "use-react-countdown";

const render = () => {
  let dateToEndCountdownAt = "July 22, 2021 00:00:00";

  const { days, hours, minutes, seconds } =
    useReactCountdown(dateToEndCountdownAt);

  return (
    <>
      <p>Time left</p>
      <div>
        {days} {hours} {minutes} {seconds}
      </div>
    </>
  );
};
```

Note that this is a very basic usage. Check out more usage examples
[in playground](https://stackblitz.com/edit/use-react-countdown?file=src/App.js "use-react-countdown on stackblitz")

## Documentation

### {days, hours, minutes, seconds} = useReactCountdown(dateToEndCountdownAt)

#### Parameters

Takes a default countdown time and interval time.

- `dateToEndCountdownAt` {`string`} Date in format **(Month DD, YYYY hh:mm:ss)**

#### Return value

Returns an object with days, hours, minutes and seconds left in that date.

- `days` {`Number`} Remaining days
- `hours` {`Number`} Remaining hours
- `minutes` {`Number`} Remaining minutes
- `seconds` {`Number`} Remaining seconds

## Contributing

Feel free to submit any issues or pull requests.
