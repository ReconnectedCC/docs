---
title: Embedded Computer
---

The Embedded Computer mod adds the following blocks
- Embedded Computer
- Secure Computer

The Embedded Computer allows you to have a computer that has an unreadable drive.

The Secure Computer is an Embedded Computer with a terminal.

## Loading data onto the Embedded Computer
You can load data onto your Embedded Computer by placing a disk drive next to it with a startup.lua file in it, that startup.lua file should have code that copies data to the Embedded Computer itself.

We suggest disabling disk startup and locking your embedded computer when your code starts in order to prevent malicious code from executing.

## API
Every embedded computer has the following functions available:

`embedded.setPassword(string pass)` - old, aliases to security.lock. prior to 1.1.0 / 0.4.0 it was equivalent to security.lockInsecure

`security.lock(string pass)` - Adds a lock to the computer, uses SHA256 hashed many times then finally hashed with SHA512 several times. do NOT manually write to .LOCKED_HASHED if you want your stuff to work.

`security.lockHashed(string pass, string algo)` - like security.lock but you specify the algorithm. supports the following:

- `sha256` (recommended)
- `murmur3`
- `adler32`
- `siphash24`

### `security` hash functions

`security.hashStrSHA512(string)`
`security.hashStrSHA256(string)`
`security.hashStrMurmur3(string)`
`security.hashStrAdler32(string)`
`security.hashStrSipHash24(string)`

### Embedded and Secure Computers' Peripheral API
`embeddedComputer.isOn()`
`embeddedComputer.getId()`
`embeddedComputer.reboot()`
`embeddedComputer.format()` - requires the computer to be unlocked to use. both the secure and insecure locks need to be removed
`embeddedComputer.unlockPlainText(string password)` - removes the insecure lock
`embeddedComputer.unlockHashed(string pass, string algo)` - removes the hashed lock, same args as security.lockHashed
`embeddedComputer.unlock(string pass)` - alias to unlockHashed with SHA256. prior to 1.1.0 / 0.4.0 it was equivalent to embeddedComputer.unlockPlainText

### Hard drive API
Please note, hard drives are made uncraftable by the server.

`hardDrive.mount(location)` - mounts the hard drive to any location on computer
`hardDrive.unmount(location)` - unmounts the hard drive from this location
