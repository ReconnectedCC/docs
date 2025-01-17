# V1 api

This is the documentation for the krist compatible v1 api.

!!! warning
    This documentation page is unfinished, please refer to [the Krist docs](https://krist.dev/docs/), keep in mind the endpoint for the Kromer API is `https://kromer.reconnected.cc/v1/` instead of `https://krist.dev`

## Addresses
Address related endpoint


### List all addresses

### List all addresses
`GET` `https://kromer.reconnected.cc/v1/addresses/`


#### Query Parameters
| Field  | Type   | Description                                                                                                   |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| limit  | number | The maximum amount of results to return, must be between 1 and 1000 (*default*: `50`, *size range*: `1-1000`) |
| offset | number | The amount to offset the results (*default*: `0`)                                                             |

```json
{
    {
	    "ok": true,
	    "count": 50,
	    "total": 500,
	    "addresses": [
	        {
	            "address": "0000000000",
	            "balance": 0,
	            "totalin": 50,
	            "totalout": 50,
	            "firstseen": "2015-02-14T16:44:40.000Z"
	        },
	        {
	            "address": "a5dfb396d3",
	            "balance": 30000,
	            "totalin": 100000,
	            "totalout": 130000,
	            "firstseen": "2015-02-14T20:42:30.000Z"
	        },
	        ...
```

### List the richest addresses
`GET` `https://kromer.reconnected.cc/v1/addresses/rich`


#### Query Parameters
| Field  | Type   | Description                                                                                                   |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| limit  | number | The maximum amount of results to return, must be between 1 and 1000 (*default*: `50`, *size range*: `1-1000`) |
| offset | number | The amount to offset the results (*default*: `0`)                                                             |

```json
{
    {
    "ok": true,
    "count": 50,
    "total": 500,
    "addresses": [
        {
            "address": "k2sdlnjo1m",
            "balance": 762010,
            "totalin": 11316,
            "totalout": 783984,
            "firstseen": "2016-01-24T05:08:14.000Z"
        },
        {
            "address": "k7u9sa6vbf",
            "balance": 505832,
            "totalin": 547785,
            "totalout": 41953,
            "firstseen": "2015-03-05T04:50:40.000Z"
        },
        ...
```

### Get an address
`GET` `https://kromer.reconnected.cc/v1/addresses/:address`

#### Parameters
| Field   | Type   | Description          |
| ------- | ------ | -------------------- |
| address | string | The address to query |

#### Query Parameters
| Field      | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| fetchNames | boolean | When supplied, fetch the count of names owned by the address |

#### Success 200

```json
{
    "ok": true,
    "address": {
        "address": "krdfi84dty",
        "balance": 645,
        "totalin": 745,
        "totalout": 100,
        "firstseen": "2024-09-15T13:52:67.000Z"
    }
}
```

#### Address Not Found
!!! warning
    This currently isn't implemented
```json
{
    "ok": false,
    "error": "address_not_found"
}
```

#### Invalid Address
!!! warning
    This currently isn't implemented
```json
{
    "ok": false,
    "error": "invalid_parameter",
    "parameter": "address"
}
```

### Get the recent transactions from an address
`GET` `https://kromer.reconnected.cc/v1/addresses/:address`


#### Query Parameters

!!! notice
    We don't parse the `excludeMined` parameter, as we have no mined transactions.

| Field  | Type   | Description                                                                                                   |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| limit  | number | The maximum amount of results to return, must be between 1 and 1000 (*default*: `50`, *size range*: `1-1000`) |
| offset | number | The amount to offset the results (*default*: `0`)                                                             |

```json
{
    

{
    "ok": true,
    "count": 50,
    "total": 3799,
    "transactions": [
        {
            "id": 153197,
            "from": "kxxhsp1uzh",
            "to": "kre3w0i79j",
            "value": 75,
            "time": "2016-02-02T23:30:51.000Z",
            "name": null,
            "metadata": null,
            "type": "transfer"
        },
        {
            "id": 153196,
            "from": "kre3w0i79j",
            "to": "kxxhsp1uzh",
            "value": 50,
            "time": "2016-02-02T23:30:39.000Z",
            "name": null,
            "metadata": null,
            "type": "transfer"
        },
        ...
```


