import * as forge from "node-forge";
// import * as moment from 'moment';

export class JSUtils {
  // RSA/OAEPWithSHA256AndMGF1Padding
  public static rsaEncryptPublicKey(publicKey: any, password: string): any {
    const rsa: any = forge.pki.rsa;
    const BigInteger: any = forge.jsbn.BigInteger;
    const n: any = new BigInteger(publicKey.mod, 16);
    const e: any = new BigInteger(publicKey.expo, 16);
    const pubKey: any = rsa.setPublicKey(n, e);
    const encrypted = pubKey.encrypt(password, "RSA-OAEP", {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha1.create(),
      },
    });

    return forge.util.encode64(encrypted);
  }

  public static encryptStorage(keyphrases: any, plaintext: any): any {
    const salt = "(Bu!1d)[J4k4p4n]{Putth4}{B!b13}[W!ch4p42](2um3tt!ku1)";
    const key = forge.pkcs5.pbkdf2(keyphrases, salt, 1000, 16);
    const iv = "2512199704061994";

    const encodeUtf8 = forge.util.encodeUtf8(plaintext);
    const input = new forge.util.ByteStringBuffer(encodeUtf8);

    const cipher = forge.cipher.createCipher("AES-CBC", key);
    cipher.start({ iv });
    cipher.update(input);
    cipher.finish();

    const encrypted = cipher.output;
    return forge.util.encode64(encrypted.data);
  }

  public static decryptStorage(keyphrases: any, encrypted: any): any {
    const salt = "(Bu!1d)[J4k4p4n]{Putth4}{B!b13}[W!ch4p42](2um3tt!ku1)";
    const key = forge.pkcs5.pbkdf2(keyphrases, salt, 1000, 16);
    const iv = "2512199704061994";

    const decodeB64 = forge.util.decode64(encrypted);
    const input = forge.util.createBuffer(decodeB64);

    const decipher = forge.cipher.createDecipher("AES-CBC", key);
    decipher.start({ iv });
    decipher.update(input);
    decipher.finish();

    const decrypted = decipher.output;
    return forge.util.decodeUtf8(decrypted.data);
  }

  // convert object to form data
  public static convertToFormData(object: any): any {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }

  // Check real mime type file image
  public static getRealMimeType(reader: any): string {
    const arr = new Uint8Array(reader.result).subarray(0, 4);
    let header = "";
    let realMimeType;
    for (let i = 0; i < arr.length; i++) {
      header += arr[i].toString(16);
    }
    switch (header) {
      case "89504e47":
        realMimeType = "png";
        break;
      case "47494638":
        realMimeType = "gif";
        break;
      case "ffd8ffDB":
      case "ffd8ffe0":
      case "ffd8ffe1":
      case "ffd8ffe2":
      case "ffd8ffe3":
      case "ffd8ffe8":
        realMimeType = "jpeg";
        break;
      case "3c737667":
      case "3c3f786d":
        realMimeType = "svg";
        break;
      case "e96220":
        realMimeType = "bin";
        break;
      default:
        realMimeType = "unknown";
        break;
    }

    return realMimeType;
  }

  // Time
  //   public static timestampToLocalTime(timestamp: any): any {
  //     return moment
  //       .unix(Number(timestamp) / 1000)
  //       .format(SYSTEMCONST.FORMAT_DATE.DATE_TIME);
  //   }

  //   public static timestampToLocalHours(timestamp: any): any {
  //     return moment
  //       .unix(Number(timestamp) / 1000)
  //       .format(SYSTEMCONST.FORMAT_DATE.HOURS);
  //   }

  //   public static utcToTimestampMS(dateUTC: string): any {
  //     return moment(dateUTC).format('x');
  //   }

  //   public static utcToLocalTime(dateUTC: string, formatDate?: string): any {
  //     if (dateUTC != null) {
  //       return moment(dateUTC).format(
  //         formatDate ? formatDate : SYSTEMCONST.FORMAT_DATE.DATE_TIME
  //       );
  //     }
  //     return '';
  //   }

  //   public static utcToLocalDate(dateUTC: string, formatDate?: string): any {
  //     if (dateUTC != null) {
  //       return moment(dateUTC).format(
  //         formatDate ? formatDate : SYSTEMCONST.FORMAT_DATE.DATE_ONLY
  //       );
  //     }
  //     return '';
  //   }
  //   public static utcToLocalDay(dateUTC: string, formatDate?: string): any {
  //     if (dateUTC != null) {
  //       return moment(dateUTC).format(
  //         formatDate ? formatDate : SYSTEMCONST.FORMAT_DATE.DAY
  //       );
  //     }
  //     return '';
  //   }

  //   public static localTimeToUTC(localTime: any): any {
  //     return moment.utc(moment(localTime)).format();
  //   }

  //   // convert local time to UTC (format: HH:mm)
  //   public static localTimeToUTCHours(localTime: string): any {
  //     return moment.utc(moment(localTime)).format(SYSTEMCONST.FORMAT_DATE.HOURS);
  //   }

  //   // convert local time to day of week, day month (format: dddd, DD MMM)
  //   public static timestampToDOW(localTime: number): any {
  //     return moment(localTime).format(SYSTEMCONST.FORMAT_DATE.DOW_DATE_MONTH);
  //   }

  //   public static timestampToTimeUTC(timestamp: number): any {
  //     return moment
  //       .utc(moment(timestamp))
  //       .format(SYSTEMCONST.FORMAT_DATE.HOURS_FULL);
  //   }

  //   public static timestampToUTC(timestamp: number): any {
  //     return moment.utc(moment(timestamp)).format();
  //   }

  //   public static getStartDay(datetime: string | number): string {
  //     return moment(datetime).startOf('day').toString();
  //   }

  //   public static getEndDay(datetime: string | number): string {
  //     return moment(datetime).endOf('day').toString();
  //   }

  //   public static parseZone(dateTime: string, formatDate: string): any {
  //     return moment.parseZone(dateTime, formatDate).utcOffset();
  //   }

  //   public static validated2month(dateFrom: string, dateTo: string): any {
  //     return moment(dateTo).valueOf() > moment(dateFrom).add(2, 'M').valueOf();
  //   }

  // check empty data
  public static checkEmptyData(data: any): boolean {
    const isEmpty = data === null || data === undefined || data === "";
    if (isEmpty) {
      return true;
    } else {
      return false;
    }
  }

  // remove empty data of object
  public static removeEmptyDataOfObject(object: any): any {
    const obj = object;
    for (const item in obj) {
      if (this.checkEmptyData(obj[item])) {
        delete obj[item];
      }
    }
    return obj;
  }

  public static renderToHtmlMultiRow(arr: string[]): string {
    return arr
      ?.map((el: string) => {
        return `<div class="py-1.5" nz-col nzSpan="24">${el}</div>`;
      })
      .toString()
      .split(",")
      .join("");
  }

  public static capitalize(string: string, symbol?: string): any {
    let strArray = string.split(symbol ? symbol : "");
    strArray = strArray.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    return strArray.join(" ");
  }
}
