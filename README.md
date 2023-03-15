
# Instalog-SDK Wrapper

This is an sdk wrapper for Instalog - A simple activity log tab system



## Features

- Easy installation into your backend
- Create events from your system using the sdk
- List event based on desired params


## Installation

Using npm:

```bash
  npm i instalog-sdk
```
## Usage/Examples

```typescript
// Importing with ES6
import { Instalog } from 'instalog-sdk'

// Or by using CommonJS require 

const { Instalog } = require('instalog-sdk')

const client = new Instalog('Your-Secret-Key')

// List events
async function testListEvents() {
    const events = await client.listEvents(20);
}

// Create an event
async function testCreateEvent() {
    const events = await client.createEvent({
        "action_name": "testing.sdk",
        "group": "anthibo-testing",
        "target_id": "target_id",
        "target_name": "anthibo",
        "location": "178.151.26.217",
        "metadata": { "platform": "npm" }
    });
}
```
## FAQ

#### How to get your secret key?

Check  [Instalog docs](https://github.com/anthibo/instalog-monorepo)

