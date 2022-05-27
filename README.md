# conviva-js-appanalytics-error-tracking
Adds Error tracking capabilities to your Conviva Application Analytics Library.

## Installation
```bash
npm install @convivainc/conviva-js-appanalytics-error-tracking
```

## Usage

Initialize your tracker with the ErrorTrackingPlugin:
```js
import { ErrorTrackingPlugin } from '@convivainc/conviva-js-appanalytics-error-tracking';
```

Then use the available functions from this package to track to all trackers which have been initialized with this plugin:
```js
import { enableErrorTracking } from '@convivainc/conviva-js-appanalytics-error-tracking';

enableErrorTracking();
