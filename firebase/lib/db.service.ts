import {
  where,
  collection,
  doc,
  getDoc,
  deleteDoc,
  getFirestore,
  query,
  orderBy as ob,
  startAfter as sa,
  limit,
  getDocs,
  CollectionReference,
  DocumentReference,
  updateDoc,
  increment,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
export { arrayRemove, arrayUnion, deleteField } from "firebase/firestore";

type WhereFilterOp =
  | "<"
  | "<="
  | "=="
  | "!="
  | ">="
  | ">"
  | "array-contains"
  | "in"
  | "array-contains-any"
  | "not-in";
export type Filter = {
  op: WhereFilterOp;
  key: string;
  value: any;
};
export type OrderBy = { orderProp: string; direction: "desc" | "asc" };
export const increaseValueBy = increment;
type CollectionNames = "users";

export async function getDocuments<T>(
  collectionName: CollectionNames,
  filterBy: Array<Filter> = null,
  orderBy: Array<OrderBy> = null,
  pageSize: number = null,
  startAfter: Array<string | number> = null
): Promise<Array<T>> {
  let q = query<T>(
    collection(getFirestore(), collectionName) as CollectionReference<T>
  );

  if (filterBy && filterBy.length > 0) {
    for (const searchKey of filterBy) {
      q = query<T>(q, where(searchKey.key, searchKey.op, searchKey.value));
    }
  }

  if (orderBy && orderBy.length > 0) {
    for (const orderKey of orderBy) {
      q = query<T>(q, ob(orderKey.orderProp, orderKey.direction));
    }
  }

  if (startAfter && startAfter.length > 0) {
    q = query<T>(q, sa(...startAfter));
  }

  if (pageSize && pageSize > 0) {
    q = query<T>(q, limit(pageSize));
  }

  const snaps = await getDocs<T>(q);
  const results: Array<T> = [];

  snaps.forEach((snap) => {
    results.push(snap.data());
  });

  return results;
}

export async function getDocument<T>(
  collectionName: CollectionNames,
  documentId: string
): Promise<T> {
  const collectionRef = collection(
    getFirestore(),
    collectionName
  ) as CollectionReference<T>;
  const ref = doc(collectionRef, documentId) as DocumentReference<T>;

  return (await getDoc(ref)).data();
}

export function useDocumentStream<T>(
  collectionName: CollectionNames,
  documentId: string
): T {
  const ref = doc(
    getFirestore(),
    `${collectionName}/${documentId}`
  ) as DocumentReference<T>;
  const [snapshot, loading, error] = useDocument<T>(ref);

  const [data, setData]: [T, any] = useState<T>(null);

  useEffect(() => {
    if (snapshot) {
      setData(snapshot.data());
    } else {
      setData(null);
    }
  }, [snapshot]);

  return data;
}

export function useDocumentsStream<T>(
  collectionName: CollectionNames,
  filterBy: Array<Filter> = null,
  orderBy: Array<OrderBy> = null,
  pageSize: number = null,
  startAfter: Array<string | number> = null
): Array<T> {
  let q = query<T>(
    collection(getFirestore(), collectionName) as CollectionReference<T>
  );

  if (filterBy && filterBy.length > 0) {
    for (const searchKey of filterBy) {
      q = query<T>(q, where(searchKey.key, searchKey.op, searchKey.value));
    }
  }

  if (orderBy && orderBy.length > 0) {
    for (const orderKey of orderBy) {
      q = query<T>(q, ob(orderKey.orderProp, orderKey.direction));
    }
  }

  if (startAfter && startAfter.length > 0) {
    q = query<T>(q, sa(...startAfter));
  }

  if (pageSize && pageSize > 0) {
    q = query<T>(q, limit(pageSize));
  }

  const [snaps, loading, error] = useCollection(q);

  const [data, setData]: [T[], any] = useState<T[]>([]);

  useEffect(() => {
    if (snaps) {
      const results: Array<T> = [];
      snaps?.forEach((snap) => {
        results.push(snap.data());
      });
      setData(results);
    } else {
      setData([]);
    }
  }, [snaps]);

  return data;
}

export async function updateDocument<T>(
  collectionName: CollectionNames,
  documentId: string,
  data: Partial<T>
) {
  const docRef = doc(
    getFirestore(),
    `${collectionName}/${documentId}`
  ) as DocumentReference<T>;

  await updateDoc<any>(docRef, data);
}

export async function createDocument<T>(
  collectionName: CollectionNames,
  idField: string,
  data: Partial<T>,
  id?: string
): Promise<string> {
  const collectionRef = collection(
    getFirestore(),
    collectionName
  ) as CollectionReference<T>;
  const docRef = id ? doc(collectionRef, id) : doc(collectionRef);

  await setDoc(
    docRef,
    {
      ...data,
      createdAt: serverTimestamp(),
      [idField]: docRef.id,
    } as any,
    { merge: true }
  );

  return docRef.id;
}

export async function deleteDocument<T>(
  collectionName: CollectionNames,
  documentId: string
): Promise<void> {
  const docRef = doc(
    getFirestore(),
    `${collectionName}/${documentId}`
  ) as DocumentReference<Partial<T>>;
  await deleteDoc(docRef);
}
