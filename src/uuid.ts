// import * as v4 from 'uuid/v4';
// import * as bytesToUuid from 'uuid/lib/bytesToUuid';
// import { isString } from './is';

export class UUID {}
export function uuid() {};

// export class UUID extends Uint8Array {
//   static readonly Zero: UUID = new UUID();

//   static compare (a: UUID, b: UUID): number;
//   static compare (a: ArrayLike<number>, b: ArrayLike<number>): number;
//   static compare (a: ArrayLike<number>, b: ArrayLike<number>): number {
//     for(
//       var i = 0, n = compare(a[0], b[0]);
//       n === 0 && i < 16;
//       ++i, n = compare(a[i], b[i])
//     );
//     return n;
//   }

//   static fromURN (urn: string): UUID {
//     return UUID.fromString(urn.substr(9));
//   }

//   static fromString (value: string): UUID {
//     const uuid = new UUID();
//     return parse(value, uuid);
//   }

//   constructor () {
//     super(16);
//   }

//   '@@equals' (other: any): boolean {
//     if (other instanceof UUID || Array.isArray(other)) {
//       return other.length === 16 && UUID.compare(this, other) === 0;
//     }
//     const str = isString(other) ? other : (other || '').toString();
//     const uuid = str.startsWith('urn:uuid:') ? UUID.fromURN(str) : UUID.fromString(str);
//     return UUID.compare(this, uuid) === 0;
//   }

//   '@@compare' (other: this): number {
//     return UUID.compare(this, other);
//   }

//   private _str = '';
//   toString () {
//     let str = this._str;
//     if(str === '') {
//       this._str = str = bytesToUuid(this);
//     }
//     return str;
//   }

//   toShortString () {
//     return this.toString().substr(0, 8);
//   }

//   toURN () {
//     return `urn:uuid:${bytesToUuid(this)}`;
//   }
// }

// export function uuid (): UUID {
//   const uuid = new UUID();
//   return v4(null, uuid);
// }

// const compare = (a: number, b: number) => a - b;

// // -----------------------------------------------------------------------------

// // ## uuid-parse: Simple, fast parsing and unparsing of RFC4122 UUIDS.
// // Code adapted under MIT license from https://github.com/zefferus/uuid-parse

// // Maps for number <-> hex string conversion
// var _byteToHex: string[] = [];
// var _hexToByte: {[key: string]: number} = {};
// for (var i = 0; i < 256; i++) {
//   _byteToHex[i] = (i + 0x100).toString(16).substr(1);
//   _hexToByte[_byteToHex[i]] = i;
// }

// // **`parse()` - Parse a UUID into it's component bytes**
// function parse<T extends Uint8Array|number[]> (s: string, buf: T, offset?: number): T {
//   const i = (buf && offset) || 0;
//   let ii = 0;

//   buf = buf || [];
//   s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct: string) {
//     if (ii < 16) { // Don't overflow!
//       buf[i + ii++] = _hexToByte[oct];
//     }
//     return oct;
//   });

//   // Zero out remaining bytes if string was short
//   while (ii < 16) {
//     buf[i + ii++] = 0;
//   }

//   return buf;
// }

// // -----------------------------------------------------------------------------

let _nextId = 0;
export function numericId () {
  return ++_nextId;
}

const _wm = new WeakMap();
export function refId (obj: object, id?: any): string {
  return id
    ? (_wm.set(obj, id), id)
    : _wm.get(obj) || (id = `?${numericId()}`, _wm.set(obj, id), id);
}
