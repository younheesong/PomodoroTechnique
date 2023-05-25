import * as admin from "firebase-admin";
export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (
      FirebaseAdmin.instance === undefined ||
      FirebaseAdmin.instance === null
    ) {
      // 초기화 진행
      FirebaseAdmin.instance = new FirebaseAdmin();
      // todo : 환경을 초기화 한다.
      FirebaseAdmin.instance.bootstrap();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true;
      return;
    }
    const config = require("../../.admin-cred.json");

    admin.initializeApp({
      credential: admin.credential.cert(config),
    });
    console.info("bootstrap firebase admin");
  }

  public get Firebase(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
