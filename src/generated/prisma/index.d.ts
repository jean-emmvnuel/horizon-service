
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Compte
 * 
 */
export type Compte = $Result.DefaultSelection<Prisma.$ComptePayload>
/**
 * Model Profil
 * 
 */
export type Profil = $Result.DefaultSelection<Prisma.$ProfilPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Abonnement
 * 
 */
export type Abonnement = $Result.DefaultSelection<Prisma.$AbonnementPayload>
/**
 * Model MouvementCaisse
 * 
 */
export type MouvementCaisse = $Result.DefaultSelection<Prisma.$MouvementCaissePayload>
/**
 * Model CaissePointage
 * 
 */
export type CaissePointage = $Result.DefaultSelection<Prisma.$CaissePointagePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model RelanceConfig
 * 
 */
export type RelanceConfig = $Result.DefaultSelection<Prisma.$RelanceConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compte`: Exposes CRUD operations for the **Compte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comptes
    * const comptes = await prisma.compte.findMany()
    * ```
    */
  get compte(): Prisma.CompteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profil`: Exposes CRUD operations for the **Profil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profils
    * const profils = await prisma.profil.findMany()
    * ```
    */
  get profil(): Prisma.ProfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abonnement`: Exposes CRUD operations for the **Abonnement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abonnements
    * const abonnements = await prisma.abonnement.findMany()
    * ```
    */
  get abonnement(): Prisma.AbonnementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mouvementCaisse`: Exposes CRUD operations for the **MouvementCaisse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MouvementCaisses
    * const mouvementCaisses = await prisma.mouvementCaisse.findMany()
    * ```
    */
  get mouvementCaisse(): Prisma.MouvementCaisseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caissePointage`: Exposes CRUD operations for the **CaissePointage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaissePointages
    * const caissePointages = await prisma.caissePointage.findMany()
    * ```
    */
  get caissePointage(): Prisma.CaissePointageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relanceConfig`: Exposes CRUD operations for the **RelanceConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelanceConfigs
    * const relanceConfigs = await prisma.relanceConfig.findMany()
    * ```
    */
  get relanceConfig(): Prisma.RelanceConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Compte: 'Compte',
    Profil: 'Profil',
    Client: 'Client',
    Abonnement: 'Abonnement',
    MouvementCaisse: 'MouvementCaisse',
    CaissePointage: 'CaissePointage',
    AuditLog: 'AuditLog',
    RelanceConfig: 'RelanceConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "compte" | "profil" | "client" | "abonnement" | "mouvementCaisse" | "caissePointage" | "auditLog" | "relanceConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Compte: {
        payload: Prisma.$ComptePayload<ExtArgs>
        fields: Prisma.CompteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findFirst: {
            args: Prisma.CompteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findMany: {
            args: Prisma.CompteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          create: {
            args: Prisma.CompteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          createMany: {
            args: Prisma.CompteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          delete: {
            args: Prisma.CompteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          update: {
            args: Prisma.CompteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          deleteMany: {
            args: Prisma.CompteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          upsert: {
            args: Prisma.CompteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          aggregate: {
            args: Prisma.CompteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompte>
          }
          groupBy: {
            args: Prisma.CompteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompteCountArgs<ExtArgs>
            result: $Utils.Optional<CompteCountAggregateOutputType> | number
          }
        }
      }
      Profil: {
        payload: Prisma.$ProfilPayload<ExtArgs>
        fields: Prisma.ProfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          findFirst: {
            args: Prisma.ProfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          findMany: {
            args: Prisma.ProfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          create: {
            args: Prisma.ProfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          createMany: {
            args: Prisma.ProfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          delete: {
            args: Prisma.ProfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          update: {
            args: Prisma.ProfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          deleteMany: {
            args: Prisma.ProfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>[]
          }
          upsert: {
            args: Prisma.ProfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilPayload>
          }
          aggregate: {
            args: Prisma.ProfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfil>
          }
          groupBy: {
            args: Prisma.ProfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Abonnement: {
        payload: Prisma.$AbonnementPayload<ExtArgs>
        fields: Prisma.AbonnementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbonnementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbonnementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          findFirst: {
            args: Prisma.AbonnementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbonnementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          findMany: {
            args: Prisma.AbonnementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          create: {
            args: Prisma.AbonnementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          createMany: {
            args: Prisma.AbonnementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbonnementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          delete: {
            args: Prisma.AbonnementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          update: {
            args: Prisma.AbonnementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          deleteMany: {
            args: Prisma.AbonnementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbonnementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbonnementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>[]
          }
          upsert: {
            args: Prisma.AbonnementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbonnementPayload>
          }
          aggregate: {
            args: Prisma.AbonnementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbonnement>
          }
          groupBy: {
            args: Prisma.AbonnementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbonnementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbonnementCountArgs<ExtArgs>
            result: $Utils.Optional<AbonnementCountAggregateOutputType> | number
          }
        }
      }
      MouvementCaisse: {
        payload: Prisma.$MouvementCaissePayload<ExtArgs>
        fields: Prisma.MouvementCaisseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MouvementCaisseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MouvementCaisseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          findFirst: {
            args: Prisma.MouvementCaisseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MouvementCaisseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          findMany: {
            args: Prisma.MouvementCaisseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>[]
          }
          create: {
            args: Prisma.MouvementCaisseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          createMany: {
            args: Prisma.MouvementCaisseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MouvementCaisseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>[]
          }
          delete: {
            args: Prisma.MouvementCaisseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          update: {
            args: Prisma.MouvementCaisseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          deleteMany: {
            args: Prisma.MouvementCaisseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MouvementCaisseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MouvementCaisseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>[]
          }
          upsert: {
            args: Prisma.MouvementCaisseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementCaissePayload>
          }
          aggregate: {
            args: Prisma.MouvementCaisseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMouvementCaisse>
          }
          groupBy: {
            args: Prisma.MouvementCaisseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MouvementCaisseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MouvementCaisseCountArgs<ExtArgs>
            result: $Utils.Optional<MouvementCaisseCountAggregateOutputType> | number
          }
        }
      }
      CaissePointage: {
        payload: Prisma.$CaissePointagePayload<ExtArgs>
        fields: Prisma.CaissePointageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaissePointageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaissePointageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          findFirst: {
            args: Prisma.CaissePointageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaissePointageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          findMany: {
            args: Prisma.CaissePointageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>[]
          }
          create: {
            args: Prisma.CaissePointageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          createMany: {
            args: Prisma.CaissePointageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaissePointageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>[]
          }
          delete: {
            args: Prisma.CaissePointageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          update: {
            args: Prisma.CaissePointageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          deleteMany: {
            args: Prisma.CaissePointageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaissePointageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaissePointageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>[]
          }
          upsert: {
            args: Prisma.CaissePointageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaissePointagePayload>
          }
          aggregate: {
            args: Prisma.CaissePointageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaissePointage>
          }
          groupBy: {
            args: Prisma.CaissePointageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaissePointageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaissePointageCountArgs<ExtArgs>
            result: $Utils.Optional<CaissePointageCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      RelanceConfig: {
        payload: Prisma.$RelanceConfigPayload<ExtArgs>
        fields: Prisma.RelanceConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelanceConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelanceConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          findFirst: {
            args: Prisma.RelanceConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelanceConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          findMany: {
            args: Prisma.RelanceConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>[]
          }
          create: {
            args: Prisma.RelanceConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          createMany: {
            args: Prisma.RelanceConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelanceConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>[]
          }
          delete: {
            args: Prisma.RelanceConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          update: {
            args: Prisma.RelanceConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          deleteMany: {
            args: Prisma.RelanceConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelanceConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelanceConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>[]
          }
          upsert: {
            args: Prisma.RelanceConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelanceConfigPayload>
          }
          aggregate: {
            args: Prisma.RelanceConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelanceConfig>
          }
          groupBy: {
            args: Prisma.RelanceConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelanceConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelanceConfigCountArgs<ExtArgs>
            result: $Utils.Optional<RelanceConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    compte?: CompteOmit
    profil?: ProfilOmit
    client?: ClientOmit
    abonnement?: AbonnementOmit
    mouvementCaisse?: MouvementCaisseOmit
    caissePointage?: CaissePointageOmit
    auditLog?: AuditLogOmit
    relanceConfig?: RelanceConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompteCountOutputType
   */

  export type CompteCountOutputType = {
    profils: number
  }

  export type CompteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profils?: boolean | CompteCountOutputTypeCountProfilsArgs
  }

  // Custom InputTypes
  /**
   * CompteCountOutputType without action
   */
  export type CompteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompteCountOutputType
     */
    select?: CompteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompteCountOutputType without action
   */
  export type CompteCountOutputTypeCountProfilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilWhereInput
  }


  /**
   * Count Type ProfilCountOutputType
   */

  export type ProfilCountOutputType = {
    abonnements: number
  }

  export type ProfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abonnements?: boolean | ProfilCountOutputTypeCountAbonnementsArgs
  }

  // Custom InputTypes
  /**
   * ProfilCountOutputType without action
   */
  export type ProfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilCountOutputType
     */
    select?: ProfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilCountOutputType without action
   */
  export type ProfilCountOutputTypeCountAbonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbonnementWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    abonnements: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abonnements?: boolean | ClientCountOutputTypeCountAbonnementsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAbonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbonnementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    role: string | null
    roleLabel: string | null
    password: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    role: string | null
    roleLabel: string | null
    password: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    name: number
    role: number
    roleLabel: number
    password: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    role?: true
    roleLabel?: true
    password?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    role?: true
    roleLabel?: true
    password?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    role?: true
    roleLabel?: true
    password?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    name: string | null
    role: string
    roleLabel: string
    password: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    roleLabel?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    roleLabel?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    roleLabel?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    roleLabel?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "name" | "role" | "roleLabel" | "password" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      name: string | null
      role: string
      roleLabel: string
      password: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly roleLabel: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Compte
   */

  export type AggregateCompte = {
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  export type CompteAvgAggregateOutputType = {
    coutRechargeMensuel: number | null
    capacitePlaces: number | null
    maxProfils: number | null
  }

  export type CompteSumAggregateOutputType = {
    coutRechargeMensuel: number | null
    capacitePlaces: number | null
    maxProfils: number | null
  }

  export type CompteMinAggregateOutputType = {
    id: string | null
    libelle: string | null
    email: string | null
    motDePasse: string | null
    dateOuverture: string | null
    dateReabonnement: string | null
    coutRechargeMensuel: number | null
    capacitePlaces: number | null
    maxProfils: number | null
    statut: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompteMaxAggregateOutputType = {
    id: string | null
    libelle: string | null
    email: string | null
    motDePasse: string | null
    dateOuverture: string | null
    dateReabonnement: string | null
    coutRechargeMensuel: number | null
    capacitePlaces: number | null
    maxProfils: number | null
    statut: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompteCountAggregateOutputType = {
    id: number
    libelle: number
    email: number
    motDePasse: number
    dateOuverture: number
    dateReabonnement: number
    coutRechargeMensuel: number
    capacitePlaces: number
    maxProfils: number
    statut: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompteAvgAggregateInputType = {
    coutRechargeMensuel?: true
    capacitePlaces?: true
    maxProfils?: true
  }

  export type CompteSumAggregateInputType = {
    coutRechargeMensuel?: true
    capacitePlaces?: true
    maxProfils?: true
  }

  export type CompteMinAggregateInputType = {
    id?: true
    libelle?: true
    email?: true
    motDePasse?: true
    dateOuverture?: true
    dateReabonnement?: true
    coutRechargeMensuel?: true
    capacitePlaces?: true
    maxProfils?: true
    statut?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompteMaxAggregateInputType = {
    id?: true
    libelle?: true
    email?: true
    motDePasse?: true
    dateOuverture?: true
    dateReabonnement?: true
    coutRechargeMensuel?: true
    capacitePlaces?: true
    maxProfils?: true
    statut?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompteCountAggregateInputType = {
    id?: true
    libelle?: true
    email?: true
    motDePasse?: true
    dateOuverture?: true
    dateReabonnement?: true
    coutRechargeMensuel?: true
    capacitePlaces?: true
    maxProfils?: true
    statut?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compte to aggregate.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comptes
    **/
    _count?: true | CompteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompteMaxAggregateInputType
  }

  export type GetCompteAggregateType<T extends CompteAggregateArgs> = {
        [P in keyof T & keyof AggregateCompte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompte[P]>
      : GetScalarType<T[P], AggregateCompte[P]>
  }




  export type CompteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompteWhereInput
    orderBy?: CompteOrderByWithAggregationInput | CompteOrderByWithAggregationInput[]
    by: CompteScalarFieldEnum[] | CompteScalarFieldEnum
    having?: CompteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompteCountAggregateInputType | true
    _avg?: CompteAvgAggregateInputType
    _sum?: CompteSumAggregateInputType
    _min?: CompteMinAggregateInputType
    _max?: CompteMaxAggregateInputType
  }

  export type CompteGroupByOutputType = {
    id: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel: number
    capacitePlaces: number
    maxProfils: number
    statut: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  type GetCompteGroupByPayload<T extends CompteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompteGroupByOutputType[P]>
            : GetScalarType<T[P], CompteGroupByOutputType[P]>
        }
      >
    >


  export type CompteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    email?: boolean
    motDePasse?: boolean
    dateOuverture?: boolean
    dateReabonnement?: boolean
    coutRechargeMensuel?: boolean
    capacitePlaces?: boolean
    maxProfils?: boolean
    statut?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profils?: boolean | Compte$profilsArgs<ExtArgs>
    _count?: boolean | CompteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    email?: boolean
    motDePasse?: boolean
    dateOuverture?: boolean
    dateReabonnement?: boolean
    coutRechargeMensuel?: boolean
    capacitePlaces?: boolean
    maxProfils?: boolean
    statut?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    email?: boolean
    motDePasse?: boolean
    dateOuverture?: boolean
    dateReabonnement?: boolean
    coutRechargeMensuel?: boolean
    capacitePlaces?: boolean
    maxProfils?: boolean
    statut?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectScalar = {
    id?: boolean
    libelle?: boolean
    email?: boolean
    motDePasse?: boolean
    dateOuverture?: boolean
    dateReabonnement?: boolean
    coutRechargeMensuel?: boolean
    capacitePlaces?: boolean
    maxProfils?: boolean
    statut?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "email" | "motDePasse" | "dateOuverture" | "dateReabonnement" | "coutRechargeMensuel" | "capacitePlaces" | "maxProfils" | "statut" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["compte"]>
  export type CompteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profils?: boolean | Compte$profilsArgs<ExtArgs>
    _count?: boolean | CompteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComptePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compte"
    objects: {
      profils: Prisma.$ProfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      libelle: string
      email: string
      motDePasse: string
      dateOuverture: string
      dateReabonnement: string
      coutRechargeMensuel: number
      capacitePlaces: number
      maxProfils: number
      statut: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["compte"]>
    composites: {}
  }

  type CompteGetPayload<S extends boolean | null | undefined | CompteDefaultArgs> = $Result.GetResult<Prisma.$ComptePayload, S>

  type CompteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompteCountAggregateInputType | true
    }

  export interface CompteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compte'], meta: { name: 'Compte' } }
    /**
     * Find zero or one Compte that matches the filter.
     * @param {CompteFindUniqueArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompteFindUniqueArgs>(args: SelectSubset<T, CompteFindUniqueArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompteFindUniqueOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompteFindUniqueOrThrowArgs>(args: SelectSubset<T, CompteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompteFindFirstArgs>(args?: SelectSubset<T, CompteFindFirstArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompteFindFirstOrThrowArgs>(args?: SelectSubset<T, CompteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comptes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comptes
     * const comptes = await prisma.compte.findMany()
     * 
     * // Get first 10 Comptes
     * const comptes = await prisma.compte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compteWithIdOnly = await prisma.compte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompteFindManyArgs>(args?: SelectSubset<T, CompteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compte.
     * @param {CompteCreateArgs} args - Arguments to create a Compte.
     * @example
     * // Create one Compte
     * const Compte = await prisma.compte.create({
     *   data: {
     *     // ... data to create a Compte
     *   }
     * })
     * 
     */
    create<T extends CompteCreateArgs>(args: SelectSubset<T, CompteCreateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comptes.
     * @param {CompteCreateManyArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompteCreateManyArgs>(args?: SelectSubset<T, CompteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comptes and returns the data saved in the database.
     * @param {CompteCreateManyAndReturnArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompteCreateManyAndReturnArgs>(args?: SelectSubset<T, CompteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compte.
     * @param {CompteDeleteArgs} args - Arguments to delete one Compte.
     * @example
     * // Delete one Compte
     * const Compte = await prisma.compte.delete({
     *   where: {
     *     // ... filter to delete one Compte
     *   }
     * })
     * 
     */
    delete<T extends CompteDeleteArgs>(args: SelectSubset<T, CompteDeleteArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compte.
     * @param {CompteUpdateArgs} args - Arguments to update one Compte.
     * @example
     * // Update one Compte
     * const compte = await prisma.compte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompteUpdateArgs>(args: SelectSubset<T, CompteUpdateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comptes.
     * @param {CompteDeleteManyArgs} args - Arguments to filter Comptes to delete.
     * @example
     * // Delete a few Comptes
     * const { count } = await prisma.compte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompteDeleteManyArgs>(args?: SelectSubset<T, CompteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompteUpdateManyArgs>(args: SelectSubset<T, CompteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes and returns the data updated in the database.
     * @param {CompteUpdateManyAndReturnArgs} args - Arguments to update many Comptes.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompteUpdateManyAndReturnArgs>(args: SelectSubset<T, CompteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compte.
     * @param {CompteUpsertArgs} args - Arguments to update or create a Compte.
     * @example
     * // Update or create a Compte
     * const compte = await prisma.compte.upsert({
     *   create: {
     *     // ... data to create a Compte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compte we want to update
     *   }
     * })
     */
    upsert<T extends CompteUpsertArgs>(args: SelectSubset<T, CompteUpsertArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteCountArgs} args - Arguments to filter Comptes to count.
     * @example
     * // Count the number of Comptes
     * const count = await prisma.compte.count({
     *   where: {
     *     // ... the filter for the Comptes we want to count
     *   }
     * })
    **/
    count<T extends CompteCountArgs>(
      args?: Subset<T, CompteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompteAggregateArgs>(args: Subset<T, CompteAggregateArgs>): Prisma.PrismaPromise<GetCompteAggregateType<T>>

    /**
     * Group by Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompteGroupByArgs['orderBy'] }
        : { orderBy?: CompteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compte model
   */
  readonly fields: CompteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profils<T extends Compte$profilsArgs<ExtArgs> = {}>(args?: Subset<T, Compte$profilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compte model
   */
  interface CompteFieldRefs {
    readonly id: FieldRef<"Compte", 'String'>
    readonly libelle: FieldRef<"Compte", 'String'>
    readonly email: FieldRef<"Compte", 'String'>
    readonly motDePasse: FieldRef<"Compte", 'String'>
    readonly dateOuverture: FieldRef<"Compte", 'String'>
    readonly dateReabonnement: FieldRef<"Compte", 'String'>
    readonly coutRechargeMensuel: FieldRef<"Compte", 'Int'>
    readonly capacitePlaces: FieldRef<"Compte", 'Int'>
    readonly maxProfils: FieldRef<"Compte", 'Int'>
    readonly statut: FieldRef<"Compte", 'String'>
    readonly notes: FieldRef<"Compte", 'String'>
    readonly createdAt: FieldRef<"Compte", 'DateTime'>
    readonly updatedAt: FieldRef<"Compte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compte findUnique
   */
  export type CompteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findUniqueOrThrow
   */
  export type CompteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findFirst
   */
  export type CompteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findFirstOrThrow
   */
  export type CompteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findMany
   */
  export type CompteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter, which Comptes to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte create
   */
  export type CompteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The data needed to create a Compte.
     */
    data: XOR<CompteCreateInput, CompteUncheckedCreateInput>
  }

  /**
   * Compte createMany
   */
  export type CompteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
  }

  /**
   * Compte createManyAndReturn
   */
  export type CompteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
  }

  /**
   * Compte update
   */
  export type CompteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The data needed to update a Compte.
     */
    data: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
    /**
     * Choose, which Compte to update.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte updateMany
   */
  export type CompteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte updateManyAndReturn
   */
  export type CompteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte upsert
   */
  export type CompteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * The filter to search for the Compte to update in case it exists.
     */
    where: CompteWhereUniqueInput
    /**
     * In case the Compte found by the `where` argument doesn't exist, create a new Compte with this data.
     */
    create: XOR<CompteCreateInput, CompteUncheckedCreateInput>
    /**
     * In case the Compte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
  }

  /**
   * Compte delete
   */
  export type CompteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
    /**
     * Filter which Compte to delete.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte deleteMany
   */
  export type CompteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comptes to delete
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to delete.
     */
    limit?: number
  }

  /**
   * Compte.profils
   */
  export type Compte$profilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    where?: ProfilWhereInput
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    cursor?: ProfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Compte without action
   */
  export type CompteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompteInclude<ExtArgs> | null
  }


  /**
   * Model Profil
   */

  export type AggregateProfil = {
    _count: ProfilCountAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  export type ProfilMinAggregateOutputType = {
    id: string | null
    nom: string | null
    codePin: string | null
    statut: string | null
    compteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    codePin: string | null
    statut: string | null
    compteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilCountAggregateOutputType = {
    id: number
    nom: number
    codePin: number
    statut: number
    compteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfilMinAggregateInputType = {
    id?: true
    nom?: true
    codePin?: true
    statut?: true
    compteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilMaxAggregateInputType = {
    id?: true
    nom?: true
    codePin?: true
    statut?: true
    compteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilCountAggregateInputType = {
    id?: true
    nom?: true
    codePin?: true
    statut?: true
    compteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profil to aggregate.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profils
    **/
    _count?: true | ProfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilMaxAggregateInputType
  }

  export type GetProfilAggregateType<T extends ProfilAggregateArgs> = {
        [P in keyof T & keyof AggregateProfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfil[P]>
      : GetScalarType<T[P], AggregateProfil[P]>
  }




  export type ProfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilWhereInput
    orderBy?: ProfilOrderByWithAggregationInput | ProfilOrderByWithAggregationInput[]
    by: ProfilScalarFieldEnum[] | ProfilScalarFieldEnum
    having?: ProfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilCountAggregateInputType | true
    _min?: ProfilMinAggregateInputType
    _max?: ProfilMaxAggregateInputType
  }

  export type ProfilGroupByOutputType = {
    id: string
    nom: string
    codePin: string
    statut: string
    compteId: string
    createdAt: Date
    updatedAt: Date
    _count: ProfilCountAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  type GetProfilGroupByPayload<T extends ProfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilGroupByOutputType[P]>
        }
      >
    >


  export type ProfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    codePin?: boolean
    statut?: boolean
    compteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    compte?: boolean | CompteDefaultArgs<ExtArgs>
    abonnements?: boolean | Profil$abonnementsArgs<ExtArgs>
    _count?: boolean | ProfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    codePin?: boolean
    statut?: boolean
    compteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    codePin?: boolean
    statut?: boolean
    compteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>

  export type ProfilSelectScalar = {
    id?: boolean
    nom?: boolean
    codePin?: boolean
    statut?: boolean
    compteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "codePin" | "statut" | "compteId" | "createdAt" | "updatedAt", ExtArgs["result"]["profil"]>
  export type ProfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compte?: boolean | CompteDefaultArgs<ExtArgs>
    abonnements?: boolean | Profil$abonnementsArgs<ExtArgs>
    _count?: boolean | ProfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }
  export type ProfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compte?: boolean | CompteDefaultArgs<ExtArgs>
  }

  export type $ProfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profil"
    objects: {
      compte: Prisma.$ComptePayload<ExtArgs>
      abonnements: Prisma.$AbonnementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      codePin: string
      statut: string
      compteId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profil"]>
    composites: {}
  }

  type ProfilGetPayload<S extends boolean | null | undefined | ProfilDefaultArgs> = $Result.GetResult<Prisma.$ProfilPayload, S>

  type ProfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilCountAggregateInputType | true
    }

  export interface ProfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profil'], meta: { name: 'Profil' } }
    /**
     * Find zero or one Profil that matches the filter.
     * @param {ProfilFindUniqueArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilFindUniqueArgs>(args: SelectSubset<T, ProfilFindUniqueArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilFindUniqueOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindFirstArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilFindFirstArgs>(args?: SelectSubset<T, ProfilFindFirstArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindFirstOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profils
     * const profils = await prisma.profil.findMany()
     * 
     * // Get first 10 Profils
     * const profils = await prisma.profil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilWithIdOnly = await prisma.profil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilFindManyArgs>(args?: SelectSubset<T, ProfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profil.
     * @param {ProfilCreateArgs} args - Arguments to create a Profil.
     * @example
     * // Create one Profil
     * const Profil = await prisma.profil.create({
     *   data: {
     *     // ... data to create a Profil
     *   }
     * })
     * 
     */
    create<T extends ProfilCreateArgs>(args: SelectSubset<T, ProfilCreateArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profils.
     * @param {ProfilCreateManyArgs} args - Arguments to create many Profils.
     * @example
     * // Create many Profils
     * const profil = await prisma.profil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilCreateManyArgs>(args?: SelectSubset<T, ProfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profils and returns the data saved in the database.
     * @param {ProfilCreateManyAndReturnArgs} args - Arguments to create many Profils.
     * @example
     * // Create many Profils
     * const profil = await prisma.profil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profils and only return the `id`
     * const profilWithIdOnly = await prisma.profil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profil.
     * @param {ProfilDeleteArgs} args - Arguments to delete one Profil.
     * @example
     * // Delete one Profil
     * const Profil = await prisma.profil.delete({
     *   where: {
     *     // ... filter to delete one Profil
     *   }
     * })
     * 
     */
    delete<T extends ProfilDeleteArgs>(args: SelectSubset<T, ProfilDeleteArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profil.
     * @param {ProfilUpdateArgs} args - Arguments to update one Profil.
     * @example
     * // Update one Profil
     * const profil = await prisma.profil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilUpdateArgs>(args: SelectSubset<T, ProfilUpdateArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profils.
     * @param {ProfilDeleteManyArgs} args - Arguments to filter Profils to delete.
     * @example
     * // Delete a few Profils
     * const { count } = await prisma.profil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilDeleteManyArgs>(args?: SelectSubset<T, ProfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profils
     * const profil = await prisma.profil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilUpdateManyArgs>(args: SelectSubset<T, ProfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profils and returns the data updated in the database.
     * @param {ProfilUpdateManyAndReturnArgs} args - Arguments to update many Profils.
     * @example
     * // Update many Profils
     * const profil = await prisma.profil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profils and only return the `id`
     * const profilWithIdOnly = await prisma.profil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfilUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profil.
     * @param {ProfilUpsertArgs} args - Arguments to update or create a Profil.
     * @example
     * // Update or create a Profil
     * const profil = await prisma.profil.upsert({
     *   create: {
     *     // ... data to create a Profil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profil we want to update
     *   }
     * })
     */
    upsert<T extends ProfilUpsertArgs>(args: SelectSubset<T, ProfilUpsertArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilCountArgs} args - Arguments to filter Profils to count.
     * @example
     * // Count the number of Profils
     * const count = await prisma.profil.count({
     *   where: {
     *     // ... the filter for the Profils we want to count
     *   }
     * })
    **/
    count<T extends ProfilCountArgs>(
      args?: Subset<T, ProfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilAggregateArgs>(args: Subset<T, ProfilAggregateArgs>): Prisma.PrismaPromise<GetProfilAggregateType<T>>

    /**
     * Group by Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilGroupByArgs['orderBy'] }
        : { orderBy?: ProfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profil model
   */
  readonly fields: ProfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compte<T extends CompteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompteDefaultArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    abonnements<T extends Profil$abonnementsArgs<ExtArgs> = {}>(args?: Subset<T, Profil$abonnementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profil model
   */
  interface ProfilFieldRefs {
    readonly id: FieldRef<"Profil", 'String'>
    readonly nom: FieldRef<"Profil", 'String'>
    readonly codePin: FieldRef<"Profil", 'String'>
    readonly statut: FieldRef<"Profil", 'String'>
    readonly compteId: FieldRef<"Profil", 'String'>
    readonly createdAt: FieldRef<"Profil", 'DateTime'>
    readonly updatedAt: FieldRef<"Profil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profil findUnique
   */
  export type ProfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil findUniqueOrThrow
   */
  export type ProfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil findFirst
   */
  export type ProfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil findFirstOrThrow
   */
  export type ProfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profil to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil findMany
   */
  export type ProfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter, which Profils to fetch.
     */
    where?: ProfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profils to fetch.
     */
    orderBy?: ProfilOrderByWithRelationInput | ProfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profils.
     */
    cursor?: ProfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profils.
     */
    skip?: number
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * Profil create
   */
  export type ProfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Profil.
     */
    data: XOR<ProfilCreateInput, ProfilUncheckedCreateInput>
  }

  /**
   * Profil createMany
   */
  export type ProfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profils.
     */
    data: ProfilCreateManyInput | ProfilCreateManyInput[]
  }

  /**
   * Profil createManyAndReturn
   */
  export type ProfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * The data used to create many Profils.
     */
    data: ProfilCreateManyInput | ProfilCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profil update
   */
  export type ProfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Profil.
     */
    data: XOR<ProfilUpdateInput, ProfilUncheckedUpdateInput>
    /**
     * Choose, which Profil to update.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil updateMany
   */
  export type ProfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profils.
     */
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyInput>
    /**
     * Filter which Profils to update
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to update.
     */
    limit?: number
  }

  /**
   * Profil updateManyAndReturn
   */
  export type ProfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * The data used to update Profils.
     */
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyInput>
    /**
     * Filter which Profils to update
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profil upsert
   */
  export type ProfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Profil to update in case it exists.
     */
    where: ProfilWhereUniqueInput
    /**
     * In case the Profil found by the `where` argument doesn't exist, create a new Profil with this data.
     */
    create: XOR<ProfilCreateInput, ProfilUncheckedCreateInput>
    /**
     * In case the Profil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilUpdateInput, ProfilUncheckedUpdateInput>
  }

  /**
   * Profil delete
   */
  export type ProfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
    /**
     * Filter which Profil to delete.
     */
    where: ProfilWhereUniqueInput
  }

  /**
   * Profil deleteMany
   */
  export type ProfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profils to delete
     */
    where?: ProfilWhereInput
    /**
     * Limit how many Profils to delete.
     */
    limit?: number
  }

  /**
   * Profil.abonnements
   */
  export type Profil$abonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    where?: AbonnementWhereInput
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    cursor?: AbonnementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Profil without action
   */
  export type ProfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profil
     */
    select?: ProfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profil
     */
    omit?: ProfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    nom: string | null
    telephone: string | null
    ancienId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    telephone: string | null
    ancienId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    nom: number
    telephone: number
    ancienId: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    nom?: true
    telephone?: true
    ancienId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    nom?: true
    telephone?: true
    ancienId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    nom?: true
    telephone?: true
    ancienId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    nom: string
    telephone: string
    ancienId: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    telephone?: boolean
    ancienId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    abonnements?: boolean | Client$abonnementsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    telephone?: boolean
    ancienId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    telephone?: boolean
    ancienId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    nom?: boolean
    telephone?: boolean
    ancienId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "telephone" | "ancienId" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abonnements?: boolean | Client$abonnementsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      abonnements: Prisma.$AbonnementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      telephone: string
      ancienId: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abonnements<T extends Client$abonnementsArgs<ExtArgs> = {}>(args?: Subset<T, Client$abonnementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly ancienId: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.abonnements
   */
  export type Client$abonnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    where?: AbonnementWhereInput
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    cursor?: AbonnementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Abonnement
   */

  export type AggregateAbonnement = {
    _count: AbonnementCountAggregateOutputType | null
    _avg: AbonnementAvgAggregateOutputType | null
    _sum: AbonnementSumAggregateOutputType | null
    _min: AbonnementMinAggregateOutputType | null
    _max: AbonnementMaxAggregateOutputType | null
  }

  export type AbonnementAvgAggregateOutputType = {
    tarif: number | null
  }

  export type AbonnementSumAggregateOutputType = {
    tarif: number | null
  }

  export type AbonnementMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    profilId: string | null
    dateDebut: string | null
    dateFin: string | null
    tarif: number | null
    statut: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbonnementMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    profilId: string | null
    dateDebut: string | null
    dateFin: string | null
    tarif: number | null
    statut: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbonnementCountAggregateOutputType = {
    id: number
    clientId: number
    profilId: number
    dateDebut: number
    dateFin: number
    tarif: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AbonnementAvgAggregateInputType = {
    tarif?: true
  }

  export type AbonnementSumAggregateInputType = {
    tarif?: true
  }

  export type AbonnementMinAggregateInputType = {
    id?: true
    clientId?: true
    profilId?: true
    dateDebut?: true
    dateFin?: true
    tarif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbonnementMaxAggregateInputType = {
    id?: true
    clientId?: true
    profilId?: true
    dateDebut?: true
    dateFin?: true
    tarif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbonnementCountAggregateInputType = {
    id?: true
    clientId?: true
    profilId?: true
    dateDebut?: true
    dateFin?: true
    tarif?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AbonnementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abonnement to aggregate.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abonnements
    **/
    _count?: true | AbonnementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbonnementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbonnementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbonnementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbonnementMaxAggregateInputType
  }

  export type GetAbonnementAggregateType<T extends AbonnementAggregateArgs> = {
        [P in keyof T & keyof AggregateAbonnement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbonnement[P]>
      : GetScalarType<T[P], AggregateAbonnement[P]>
  }




  export type AbonnementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbonnementWhereInput
    orderBy?: AbonnementOrderByWithAggregationInput | AbonnementOrderByWithAggregationInput[]
    by: AbonnementScalarFieldEnum[] | AbonnementScalarFieldEnum
    having?: AbonnementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbonnementCountAggregateInputType | true
    _avg?: AbonnementAvgAggregateInputType
    _sum?: AbonnementSumAggregateInputType
    _min?: AbonnementMinAggregateInputType
    _max?: AbonnementMaxAggregateInputType
  }

  export type AbonnementGroupByOutputType = {
    id: string
    clientId: string
    profilId: string
    dateDebut: string
    dateFin: string
    tarif: number
    statut: string
    createdAt: Date
    updatedAt: Date
    _count: AbonnementCountAggregateOutputType | null
    _avg: AbonnementAvgAggregateOutputType | null
    _sum: AbonnementSumAggregateOutputType | null
    _min: AbonnementMinAggregateOutputType | null
    _max: AbonnementMaxAggregateOutputType | null
  }

  type GetAbonnementGroupByPayload<T extends AbonnementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbonnementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbonnementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbonnementGroupByOutputType[P]>
            : GetScalarType<T[P], AbonnementGroupByOutputType[P]>
        }
      >
    >


  export type AbonnementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    profilId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    tarif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    profilId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    tarif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    profilId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    tarif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abonnement"]>

  export type AbonnementSelectScalar = {
    id?: boolean
    clientId?: boolean
    profilId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    tarif?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AbonnementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "profilId" | "dateDebut" | "dateFin" | "tarif" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["abonnement"]>
  export type AbonnementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }
  export type AbonnementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }
  export type AbonnementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profil?: boolean | ProfilDefaultArgs<ExtArgs>
  }

  export type $AbonnementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Abonnement"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      profil: Prisma.$ProfilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      profilId: string
      dateDebut: string
      dateFin: string
      tarif: number
      statut: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["abonnement"]>
    composites: {}
  }

  type AbonnementGetPayload<S extends boolean | null | undefined | AbonnementDefaultArgs> = $Result.GetResult<Prisma.$AbonnementPayload, S>

  type AbonnementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbonnementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbonnementCountAggregateInputType | true
    }

  export interface AbonnementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Abonnement'], meta: { name: 'Abonnement' } }
    /**
     * Find zero or one Abonnement that matches the filter.
     * @param {AbonnementFindUniqueArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbonnementFindUniqueArgs>(args: SelectSubset<T, AbonnementFindUniqueArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Abonnement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbonnementFindUniqueOrThrowArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbonnementFindUniqueOrThrowArgs>(args: SelectSubset<T, AbonnementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abonnement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindFirstArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbonnementFindFirstArgs>(args?: SelectSubset<T, AbonnementFindFirstArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abonnement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindFirstOrThrowArgs} args - Arguments to find a Abonnement
     * @example
     * // Get one Abonnement
     * const abonnement = await prisma.abonnement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbonnementFindFirstOrThrowArgs>(args?: SelectSubset<T, AbonnementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abonnements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abonnements
     * const abonnements = await prisma.abonnement.findMany()
     * 
     * // Get first 10 Abonnements
     * const abonnements = await prisma.abonnement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abonnementWithIdOnly = await prisma.abonnement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbonnementFindManyArgs>(args?: SelectSubset<T, AbonnementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Abonnement.
     * @param {AbonnementCreateArgs} args - Arguments to create a Abonnement.
     * @example
     * // Create one Abonnement
     * const Abonnement = await prisma.abonnement.create({
     *   data: {
     *     // ... data to create a Abonnement
     *   }
     * })
     * 
     */
    create<T extends AbonnementCreateArgs>(args: SelectSubset<T, AbonnementCreateArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abonnements.
     * @param {AbonnementCreateManyArgs} args - Arguments to create many Abonnements.
     * @example
     * // Create many Abonnements
     * const abonnement = await prisma.abonnement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbonnementCreateManyArgs>(args?: SelectSubset<T, AbonnementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abonnements and returns the data saved in the database.
     * @param {AbonnementCreateManyAndReturnArgs} args - Arguments to create many Abonnements.
     * @example
     * // Create many Abonnements
     * const abonnement = await prisma.abonnement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abonnements and only return the `id`
     * const abonnementWithIdOnly = await prisma.abonnement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbonnementCreateManyAndReturnArgs>(args?: SelectSubset<T, AbonnementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Abonnement.
     * @param {AbonnementDeleteArgs} args - Arguments to delete one Abonnement.
     * @example
     * // Delete one Abonnement
     * const Abonnement = await prisma.abonnement.delete({
     *   where: {
     *     // ... filter to delete one Abonnement
     *   }
     * })
     * 
     */
    delete<T extends AbonnementDeleteArgs>(args: SelectSubset<T, AbonnementDeleteArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Abonnement.
     * @param {AbonnementUpdateArgs} args - Arguments to update one Abonnement.
     * @example
     * // Update one Abonnement
     * const abonnement = await prisma.abonnement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbonnementUpdateArgs>(args: SelectSubset<T, AbonnementUpdateArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abonnements.
     * @param {AbonnementDeleteManyArgs} args - Arguments to filter Abonnements to delete.
     * @example
     * // Delete a few Abonnements
     * const { count } = await prisma.abonnement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbonnementDeleteManyArgs>(args?: SelectSubset<T, AbonnementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abonnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abonnements
     * const abonnement = await prisma.abonnement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbonnementUpdateManyArgs>(args: SelectSubset<T, AbonnementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abonnements and returns the data updated in the database.
     * @param {AbonnementUpdateManyAndReturnArgs} args - Arguments to update many Abonnements.
     * @example
     * // Update many Abonnements
     * const abonnement = await prisma.abonnement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abonnements and only return the `id`
     * const abonnementWithIdOnly = await prisma.abonnement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbonnementUpdateManyAndReturnArgs>(args: SelectSubset<T, AbonnementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Abonnement.
     * @param {AbonnementUpsertArgs} args - Arguments to update or create a Abonnement.
     * @example
     * // Update or create a Abonnement
     * const abonnement = await prisma.abonnement.upsert({
     *   create: {
     *     // ... data to create a Abonnement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abonnement we want to update
     *   }
     * })
     */
    upsert<T extends AbonnementUpsertArgs>(args: SelectSubset<T, AbonnementUpsertArgs<ExtArgs>>): Prisma__AbonnementClient<$Result.GetResult<Prisma.$AbonnementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abonnements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementCountArgs} args - Arguments to filter Abonnements to count.
     * @example
     * // Count the number of Abonnements
     * const count = await prisma.abonnement.count({
     *   where: {
     *     // ... the filter for the Abonnements we want to count
     *   }
     * })
    **/
    count<T extends AbonnementCountArgs>(
      args?: Subset<T, AbonnementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbonnementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abonnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbonnementAggregateArgs>(args: Subset<T, AbonnementAggregateArgs>): Prisma.PrismaPromise<GetAbonnementAggregateType<T>>

    /**
     * Group by Abonnement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbonnementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbonnementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbonnementGroupByArgs['orderBy'] }
        : { orderBy?: AbonnementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbonnementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbonnementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Abonnement model
   */
  readonly fields: AbonnementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Abonnement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbonnementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profil<T extends ProfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfilDefaultArgs<ExtArgs>>): Prisma__ProfilClient<$Result.GetResult<Prisma.$ProfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Abonnement model
   */
  interface AbonnementFieldRefs {
    readonly id: FieldRef<"Abonnement", 'String'>
    readonly clientId: FieldRef<"Abonnement", 'String'>
    readonly profilId: FieldRef<"Abonnement", 'String'>
    readonly dateDebut: FieldRef<"Abonnement", 'String'>
    readonly dateFin: FieldRef<"Abonnement", 'String'>
    readonly tarif: FieldRef<"Abonnement", 'Int'>
    readonly statut: FieldRef<"Abonnement", 'String'>
    readonly createdAt: FieldRef<"Abonnement", 'DateTime'>
    readonly updatedAt: FieldRef<"Abonnement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Abonnement findUnique
   */
  export type AbonnementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement findUniqueOrThrow
   */
  export type AbonnementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement findFirst
   */
  export type AbonnementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abonnements.
     */
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement findFirstOrThrow
   */
  export type AbonnementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnement to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abonnements.
     */
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement findMany
   */
  export type AbonnementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter, which Abonnements to fetch.
     */
    where?: AbonnementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abonnements to fetch.
     */
    orderBy?: AbonnementOrderByWithRelationInput | AbonnementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abonnements.
     */
    cursor?: AbonnementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abonnements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abonnements.
     */
    skip?: number
    distinct?: AbonnementScalarFieldEnum | AbonnementScalarFieldEnum[]
  }

  /**
   * Abonnement create
   */
  export type AbonnementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The data needed to create a Abonnement.
     */
    data: XOR<AbonnementCreateInput, AbonnementUncheckedCreateInput>
  }

  /**
   * Abonnement createMany
   */
  export type AbonnementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abonnements.
     */
    data: AbonnementCreateManyInput | AbonnementCreateManyInput[]
  }

  /**
   * Abonnement createManyAndReturn
   */
  export type AbonnementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * The data used to create many Abonnements.
     */
    data: AbonnementCreateManyInput | AbonnementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Abonnement update
   */
  export type AbonnementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The data needed to update a Abonnement.
     */
    data: XOR<AbonnementUpdateInput, AbonnementUncheckedUpdateInput>
    /**
     * Choose, which Abonnement to update.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement updateMany
   */
  export type AbonnementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abonnements.
     */
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyInput>
    /**
     * Filter which Abonnements to update
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to update.
     */
    limit?: number
  }

  /**
   * Abonnement updateManyAndReturn
   */
  export type AbonnementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * The data used to update Abonnements.
     */
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyInput>
    /**
     * Filter which Abonnements to update
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Abonnement upsert
   */
  export type AbonnementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * The filter to search for the Abonnement to update in case it exists.
     */
    where: AbonnementWhereUniqueInput
    /**
     * In case the Abonnement found by the `where` argument doesn't exist, create a new Abonnement with this data.
     */
    create: XOR<AbonnementCreateInput, AbonnementUncheckedCreateInput>
    /**
     * In case the Abonnement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbonnementUpdateInput, AbonnementUncheckedUpdateInput>
  }

  /**
   * Abonnement delete
   */
  export type AbonnementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
    /**
     * Filter which Abonnement to delete.
     */
    where: AbonnementWhereUniqueInput
  }

  /**
   * Abonnement deleteMany
   */
  export type AbonnementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abonnements to delete
     */
    where?: AbonnementWhereInput
    /**
     * Limit how many Abonnements to delete.
     */
    limit?: number
  }

  /**
   * Abonnement without action
   */
  export type AbonnementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abonnement
     */
    select?: AbonnementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abonnement
     */
    omit?: AbonnementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbonnementInclude<ExtArgs> | null
  }


  /**
   * Model MouvementCaisse
   */

  export type AggregateMouvementCaisse = {
    _count: MouvementCaisseCountAggregateOutputType | null
    _avg: MouvementCaisseAvgAggregateOutputType | null
    _sum: MouvementCaisseSumAggregateOutputType | null
    _min: MouvementCaisseMinAggregateOutputType | null
    _max: MouvementCaisseMaxAggregateOutputType | null
  }

  export type MouvementCaisseAvgAggregateOutputType = {
    montant: number | null
  }

  export type MouvementCaisseSumAggregateOutputType = {
    montant: number | null
  }

  export type MouvementCaisseMinAggregateOutputType = {
    id: string | null
    type: string | null
    beneficiaire: string | null
    montant: number | null
    date: string | null
    motif: string | null
    createdAt: Date | null
  }

  export type MouvementCaisseMaxAggregateOutputType = {
    id: string | null
    type: string | null
    beneficiaire: string | null
    montant: number | null
    date: string | null
    motif: string | null
    createdAt: Date | null
  }

  export type MouvementCaisseCountAggregateOutputType = {
    id: number
    type: number
    beneficiaire: number
    montant: number
    date: number
    motif: number
    createdAt: number
    _all: number
  }


  export type MouvementCaisseAvgAggregateInputType = {
    montant?: true
  }

  export type MouvementCaisseSumAggregateInputType = {
    montant?: true
  }

  export type MouvementCaisseMinAggregateInputType = {
    id?: true
    type?: true
    beneficiaire?: true
    montant?: true
    date?: true
    motif?: true
    createdAt?: true
  }

  export type MouvementCaisseMaxAggregateInputType = {
    id?: true
    type?: true
    beneficiaire?: true
    montant?: true
    date?: true
    motif?: true
    createdAt?: true
  }

  export type MouvementCaisseCountAggregateInputType = {
    id?: true
    type?: true
    beneficiaire?: true
    montant?: true
    date?: true
    motif?: true
    createdAt?: true
    _all?: true
  }

  export type MouvementCaisseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouvementCaisse to aggregate.
     */
    where?: MouvementCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementCaisses to fetch.
     */
    orderBy?: MouvementCaisseOrderByWithRelationInput | MouvementCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MouvementCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MouvementCaisses
    **/
    _count?: true | MouvementCaisseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MouvementCaisseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MouvementCaisseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MouvementCaisseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MouvementCaisseMaxAggregateInputType
  }

  export type GetMouvementCaisseAggregateType<T extends MouvementCaisseAggregateArgs> = {
        [P in keyof T & keyof AggregateMouvementCaisse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMouvementCaisse[P]>
      : GetScalarType<T[P], AggregateMouvementCaisse[P]>
  }




  export type MouvementCaisseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementCaisseWhereInput
    orderBy?: MouvementCaisseOrderByWithAggregationInput | MouvementCaisseOrderByWithAggregationInput[]
    by: MouvementCaisseScalarFieldEnum[] | MouvementCaisseScalarFieldEnum
    having?: MouvementCaisseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MouvementCaisseCountAggregateInputType | true
    _avg?: MouvementCaisseAvgAggregateInputType
    _sum?: MouvementCaisseSumAggregateInputType
    _min?: MouvementCaisseMinAggregateInputType
    _max?: MouvementCaisseMaxAggregateInputType
  }

  export type MouvementCaisseGroupByOutputType = {
    id: string
    type: string
    beneficiaire: string
    montant: number
    date: string
    motif: string | null
    createdAt: Date
    _count: MouvementCaisseCountAggregateOutputType | null
    _avg: MouvementCaisseAvgAggregateOutputType | null
    _sum: MouvementCaisseSumAggregateOutputType | null
    _min: MouvementCaisseMinAggregateOutputType | null
    _max: MouvementCaisseMaxAggregateOutputType | null
  }

  type GetMouvementCaisseGroupByPayload<T extends MouvementCaisseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MouvementCaisseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MouvementCaisseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MouvementCaisseGroupByOutputType[P]>
            : GetScalarType<T[P], MouvementCaisseGroupByOutputType[P]>
        }
      >
    >


  export type MouvementCaisseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    beneficiaire?: boolean
    montant?: boolean
    date?: boolean
    motif?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mouvementCaisse"]>

  export type MouvementCaisseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    beneficiaire?: boolean
    montant?: boolean
    date?: boolean
    motif?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mouvementCaisse"]>

  export type MouvementCaisseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    beneficiaire?: boolean
    montant?: boolean
    date?: boolean
    motif?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mouvementCaisse"]>

  export type MouvementCaisseSelectScalar = {
    id?: boolean
    type?: boolean
    beneficiaire?: boolean
    montant?: boolean
    date?: boolean
    motif?: boolean
    createdAt?: boolean
  }

  export type MouvementCaisseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "beneficiaire" | "montant" | "date" | "motif" | "createdAt", ExtArgs["result"]["mouvementCaisse"]>

  export type $MouvementCaissePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MouvementCaisse"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      beneficiaire: string
      montant: number
      date: string
      motif: string | null
      createdAt: Date
    }, ExtArgs["result"]["mouvementCaisse"]>
    composites: {}
  }

  type MouvementCaisseGetPayload<S extends boolean | null | undefined | MouvementCaisseDefaultArgs> = $Result.GetResult<Prisma.$MouvementCaissePayload, S>

  type MouvementCaisseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MouvementCaisseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MouvementCaisseCountAggregateInputType | true
    }

  export interface MouvementCaisseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MouvementCaisse'], meta: { name: 'MouvementCaisse' } }
    /**
     * Find zero or one MouvementCaisse that matches the filter.
     * @param {MouvementCaisseFindUniqueArgs} args - Arguments to find a MouvementCaisse
     * @example
     * // Get one MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MouvementCaisseFindUniqueArgs>(args: SelectSubset<T, MouvementCaisseFindUniqueArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MouvementCaisse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MouvementCaisseFindUniqueOrThrowArgs} args - Arguments to find a MouvementCaisse
     * @example
     * // Get one MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MouvementCaisseFindUniqueOrThrowArgs>(args: SelectSubset<T, MouvementCaisseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MouvementCaisse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseFindFirstArgs} args - Arguments to find a MouvementCaisse
     * @example
     * // Get one MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MouvementCaisseFindFirstArgs>(args?: SelectSubset<T, MouvementCaisseFindFirstArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MouvementCaisse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseFindFirstOrThrowArgs} args - Arguments to find a MouvementCaisse
     * @example
     * // Get one MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MouvementCaisseFindFirstOrThrowArgs>(args?: SelectSubset<T, MouvementCaisseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MouvementCaisses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MouvementCaisses
     * const mouvementCaisses = await prisma.mouvementCaisse.findMany()
     * 
     * // Get first 10 MouvementCaisses
     * const mouvementCaisses = await prisma.mouvementCaisse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mouvementCaisseWithIdOnly = await prisma.mouvementCaisse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MouvementCaisseFindManyArgs>(args?: SelectSubset<T, MouvementCaisseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MouvementCaisse.
     * @param {MouvementCaisseCreateArgs} args - Arguments to create a MouvementCaisse.
     * @example
     * // Create one MouvementCaisse
     * const MouvementCaisse = await prisma.mouvementCaisse.create({
     *   data: {
     *     // ... data to create a MouvementCaisse
     *   }
     * })
     * 
     */
    create<T extends MouvementCaisseCreateArgs>(args: SelectSubset<T, MouvementCaisseCreateArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MouvementCaisses.
     * @param {MouvementCaisseCreateManyArgs} args - Arguments to create many MouvementCaisses.
     * @example
     * // Create many MouvementCaisses
     * const mouvementCaisse = await prisma.mouvementCaisse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MouvementCaisseCreateManyArgs>(args?: SelectSubset<T, MouvementCaisseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MouvementCaisses and returns the data saved in the database.
     * @param {MouvementCaisseCreateManyAndReturnArgs} args - Arguments to create many MouvementCaisses.
     * @example
     * // Create many MouvementCaisses
     * const mouvementCaisse = await prisma.mouvementCaisse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MouvementCaisses and only return the `id`
     * const mouvementCaisseWithIdOnly = await prisma.mouvementCaisse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MouvementCaisseCreateManyAndReturnArgs>(args?: SelectSubset<T, MouvementCaisseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MouvementCaisse.
     * @param {MouvementCaisseDeleteArgs} args - Arguments to delete one MouvementCaisse.
     * @example
     * // Delete one MouvementCaisse
     * const MouvementCaisse = await prisma.mouvementCaisse.delete({
     *   where: {
     *     // ... filter to delete one MouvementCaisse
     *   }
     * })
     * 
     */
    delete<T extends MouvementCaisseDeleteArgs>(args: SelectSubset<T, MouvementCaisseDeleteArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MouvementCaisse.
     * @param {MouvementCaisseUpdateArgs} args - Arguments to update one MouvementCaisse.
     * @example
     * // Update one MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MouvementCaisseUpdateArgs>(args: SelectSubset<T, MouvementCaisseUpdateArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MouvementCaisses.
     * @param {MouvementCaisseDeleteManyArgs} args - Arguments to filter MouvementCaisses to delete.
     * @example
     * // Delete a few MouvementCaisses
     * const { count } = await prisma.mouvementCaisse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MouvementCaisseDeleteManyArgs>(args?: SelectSubset<T, MouvementCaisseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MouvementCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MouvementCaisses
     * const mouvementCaisse = await prisma.mouvementCaisse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MouvementCaisseUpdateManyArgs>(args: SelectSubset<T, MouvementCaisseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MouvementCaisses and returns the data updated in the database.
     * @param {MouvementCaisseUpdateManyAndReturnArgs} args - Arguments to update many MouvementCaisses.
     * @example
     * // Update many MouvementCaisses
     * const mouvementCaisse = await prisma.mouvementCaisse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MouvementCaisses and only return the `id`
     * const mouvementCaisseWithIdOnly = await prisma.mouvementCaisse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MouvementCaisseUpdateManyAndReturnArgs>(args: SelectSubset<T, MouvementCaisseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MouvementCaisse.
     * @param {MouvementCaisseUpsertArgs} args - Arguments to update or create a MouvementCaisse.
     * @example
     * // Update or create a MouvementCaisse
     * const mouvementCaisse = await prisma.mouvementCaisse.upsert({
     *   create: {
     *     // ... data to create a MouvementCaisse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MouvementCaisse we want to update
     *   }
     * })
     */
    upsert<T extends MouvementCaisseUpsertArgs>(args: SelectSubset<T, MouvementCaisseUpsertArgs<ExtArgs>>): Prisma__MouvementCaisseClient<$Result.GetResult<Prisma.$MouvementCaissePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MouvementCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseCountArgs} args - Arguments to filter MouvementCaisses to count.
     * @example
     * // Count the number of MouvementCaisses
     * const count = await prisma.mouvementCaisse.count({
     *   where: {
     *     // ... the filter for the MouvementCaisses we want to count
     *   }
     * })
    **/
    count<T extends MouvementCaisseCountArgs>(
      args?: Subset<T, MouvementCaisseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MouvementCaisseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MouvementCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MouvementCaisseAggregateArgs>(args: Subset<T, MouvementCaisseAggregateArgs>): Prisma.PrismaPromise<GetMouvementCaisseAggregateType<T>>

    /**
     * Group by MouvementCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCaisseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MouvementCaisseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MouvementCaisseGroupByArgs['orderBy'] }
        : { orderBy?: MouvementCaisseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MouvementCaisseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMouvementCaisseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MouvementCaisse model
   */
  readonly fields: MouvementCaisseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MouvementCaisse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MouvementCaisseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MouvementCaisse model
   */
  interface MouvementCaisseFieldRefs {
    readonly id: FieldRef<"MouvementCaisse", 'String'>
    readonly type: FieldRef<"MouvementCaisse", 'String'>
    readonly beneficiaire: FieldRef<"MouvementCaisse", 'String'>
    readonly montant: FieldRef<"MouvementCaisse", 'Int'>
    readonly date: FieldRef<"MouvementCaisse", 'String'>
    readonly motif: FieldRef<"MouvementCaisse", 'String'>
    readonly createdAt: FieldRef<"MouvementCaisse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MouvementCaisse findUnique
   */
  export type MouvementCaisseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter, which MouvementCaisse to fetch.
     */
    where: MouvementCaisseWhereUniqueInput
  }

  /**
   * MouvementCaisse findUniqueOrThrow
   */
  export type MouvementCaisseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter, which MouvementCaisse to fetch.
     */
    where: MouvementCaisseWhereUniqueInput
  }

  /**
   * MouvementCaisse findFirst
   */
  export type MouvementCaisseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter, which MouvementCaisse to fetch.
     */
    where?: MouvementCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementCaisses to fetch.
     */
    orderBy?: MouvementCaisseOrderByWithRelationInput | MouvementCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouvementCaisses.
     */
    cursor?: MouvementCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouvementCaisses.
     */
    distinct?: MouvementCaisseScalarFieldEnum | MouvementCaisseScalarFieldEnum[]
  }

  /**
   * MouvementCaisse findFirstOrThrow
   */
  export type MouvementCaisseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter, which MouvementCaisse to fetch.
     */
    where?: MouvementCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementCaisses to fetch.
     */
    orderBy?: MouvementCaisseOrderByWithRelationInput | MouvementCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouvementCaisses.
     */
    cursor?: MouvementCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouvementCaisses.
     */
    distinct?: MouvementCaisseScalarFieldEnum | MouvementCaisseScalarFieldEnum[]
  }

  /**
   * MouvementCaisse findMany
   */
  export type MouvementCaisseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter, which MouvementCaisses to fetch.
     */
    where?: MouvementCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementCaisses to fetch.
     */
    orderBy?: MouvementCaisseOrderByWithRelationInput | MouvementCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MouvementCaisses.
     */
    cursor?: MouvementCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementCaisses.
     */
    skip?: number
    distinct?: MouvementCaisseScalarFieldEnum | MouvementCaisseScalarFieldEnum[]
  }

  /**
   * MouvementCaisse create
   */
  export type MouvementCaisseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * The data needed to create a MouvementCaisse.
     */
    data: XOR<MouvementCaisseCreateInput, MouvementCaisseUncheckedCreateInput>
  }

  /**
   * MouvementCaisse createMany
   */
  export type MouvementCaisseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MouvementCaisses.
     */
    data: MouvementCaisseCreateManyInput | MouvementCaisseCreateManyInput[]
  }

  /**
   * MouvementCaisse createManyAndReturn
   */
  export type MouvementCaisseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * The data used to create many MouvementCaisses.
     */
    data: MouvementCaisseCreateManyInput | MouvementCaisseCreateManyInput[]
  }

  /**
   * MouvementCaisse update
   */
  export type MouvementCaisseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * The data needed to update a MouvementCaisse.
     */
    data: XOR<MouvementCaisseUpdateInput, MouvementCaisseUncheckedUpdateInput>
    /**
     * Choose, which MouvementCaisse to update.
     */
    where: MouvementCaisseWhereUniqueInput
  }

  /**
   * MouvementCaisse updateMany
   */
  export type MouvementCaisseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MouvementCaisses.
     */
    data: XOR<MouvementCaisseUpdateManyMutationInput, MouvementCaisseUncheckedUpdateManyInput>
    /**
     * Filter which MouvementCaisses to update
     */
    where?: MouvementCaisseWhereInput
    /**
     * Limit how many MouvementCaisses to update.
     */
    limit?: number
  }

  /**
   * MouvementCaisse updateManyAndReturn
   */
  export type MouvementCaisseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * The data used to update MouvementCaisses.
     */
    data: XOR<MouvementCaisseUpdateManyMutationInput, MouvementCaisseUncheckedUpdateManyInput>
    /**
     * Filter which MouvementCaisses to update
     */
    where?: MouvementCaisseWhereInput
    /**
     * Limit how many MouvementCaisses to update.
     */
    limit?: number
  }

  /**
   * MouvementCaisse upsert
   */
  export type MouvementCaisseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * The filter to search for the MouvementCaisse to update in case it exists.
     */
    where: MouvementCaisseWhereUniqueInput
    /**
     * In case the MouvementCaisse found by the `where` argument doesn't exist, create a new MouvementCaisse with this data.
     */
    create: XOR<MouvementCaisseCreateInput, MouvementCaisseUncheckedCreateInput>
    /**
     * In case the MouvementCaisse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MouvementCaisseUpdateInput, MouvementCaisseUncheckedUpdateInput>
  }

  /**
   * MouvementCaisse delete
   */
  export type MouvementCaisseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
    /**
     * Filter which MouvementCaisse to delete.
     */
    where: MouvementCaisseWhereUniqueInput
  }

  /**
   * MouvementCaisse deleteMany
   */
  export type MouvementCaisseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouvementCaisses to delete
     */
    where?: MouvementCaisseWhereInput
    /**
     * Limit how many MouvementCaisses to delete.
     */
    limit?: number
  }

  /**
   * MouvementCaisse without action
   */
  export type MouvementCaisseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementCaisse
     */
    select?: MouvementCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementCaisse
     */
    omit?: MouvementCaisseOmit<ExtArgs> | null
  }


  /**
   * Model CaissePointage
   */

  export type AggregateCaissePointage = {
    _count: CaissePointageCountAggregateOutputType | null
    _avg: CaissePointageAvgAggregateOutputType | null
    _sum: CaissePointageSumAggregateOutputType | null
    _min: CaissePointageMinAggregateOutputType | null
    _max: CaissePointageMaxAggregateOutputType | null
  }

  export type CaissePointageAvgAggregateOutputType = {
    dernierPointageReel: number | null
  }

  export type CaissePointageSumAggregateOutputType = {
    dernierPointageReel: number | null
  }

  export type CaissePointageMinAggregateOutputType = {
    id: string | null
    dernierPointageReel: number | null
    dateDernierPointage: string | null
    notes: string | null
    updatedAt: Date | null
  }

  export type CaissePointageMaxAggregateOutputType = {
    id: string | null
    dernierPointageReel: number | null
    dateDernierPointage: string | null
    notes: string | null
    updatedAt: Date | null
  }

  export type CaissePointageCountAggregateOutputType = {
    id: number
    dernierPointageReel: number
    dateDernierPointage: number
    notes: number
    updatedAt: number
    _all: number
  }


  export type CaissePointageAvgAggregateInputType = {
    dernierPointageReel?: true
  }

  export type CaissePointageSumAggregateInputType = {
    dernierPointageReel?: true
  }

  export type CaissePointageMinAggregateInputType = {
    id?: true
    dernierPointageReel?: true
    dateDernierPointage?: true
    notes?: true
    updatedAt?: true
  }

  export type CaissePointageMaxAggregateInputType = {
    id?: true
    dernierPointageReel?: true
    dateDernierPointage?: true
    notes?: true
    updatedAt?: true
  }

  export type CaissePointageCountAggregateInputType = {
    id?: true
    dernierPointageReel?: true
    dateDernierPointage?: true
    notes?: true
    updatedAt?: true
    _all?: true
  }

  export type CaissePointageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaissePointage to aggregate.
     */
    where?: CaissePointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaissePointages to fetch.
     */
    orderBy?: CaissePointageOrderByWithRelationInput | CaissePointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaissePointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaissePointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaissePointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaissePointages
    **/
    _count?: true | CaissePointageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaissePointageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaissePointageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaissePointageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaissePointageMaxAggregateInputType
  }

  export type GetCaissePointageAggregateType<T extends CaissePointageAggregateArgs> = {
        [P in keyof T & keyof AggregateCaissePointage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaissePointage[P]>
      : GetScalarType<T[P], AggregateCaissePointage[P]>
  }




  export type CaissePointageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaissePointageWhereInput
    orderBy?: CaissePointageOrderByWithAggregationInput | CaissePointageOrderByWithAggregationInput[]
    by: CaissePointageScalarFieldEnum[] | CaissePointageScalarFieldEnum
    having?: CaissePointageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaissePointageCountAggregateInputType | true
    _avg?: CaissePointageAvgAggregateInputType
    _sum?: CaissePointageSumAggregateInputType
    _min?: CaissePointageMinAggregateInputType
    _max?: CaissePointageMaxAggregateInputType
  }

  export type CaissePointageGroupByOutputType = {
    id: string
    dernierPointageReel: number
    dateDernierPointage: string
    notes: string | null
    updatedAt: Date
    _count: CaissePointageCountAggregateOutputType | null
    _avg: CaissePointageAvgAggregateOutputType | null
    _sum: CaissePointageSumAggregateOutputType | null
    _min: CaissePointageMinAggregateOutputType | null
    _max: CaissePointageMaxAggregateOutputType | null
  }

  type GetCaissePointageGroupByPayload<T extends CaissePointageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaissePointageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaissePointageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaissePointageGroupByOutputType[P]>
            : GetScalarType<T[P], CaissePointageGroupByOutputType[P]>
        }
      >
    >


  export type CaissePointageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dernierPointageReel?: boolean
    dateDernierPointage?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caissePointage"]>

  export type CaissePointageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dernierPointageReel?: boolean
    dateDernierPointage?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caissePointage"]>

  export type CaissePointageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dernierPointageReel?: boolean
    dateDernierPointage?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caissePointage"]>

  export type CaissePointageSelectScalar = {
    id?: boolean
    dernierPointageReel?: boolean
    dateDernierPointage?: boolean
    notes?: boolean
    updatedAt?: boolean
  }

  export type CaissePointageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dernierPointageReel" | "dateDernierPointage" | "notes" | "updatedAt", ExtArgs["result"]["caissePointage"]>

  export type $CaissePointagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaissePointage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dernierPointageReel: number
      dateDernierPointage: string
      notes: string | null
      updatedAt: Date
    }, ExtArgs["result"]["caissePointage"]>
    composites: {}
  }

  type CaissePointageGetPayload<S extends boolean | null | undefined | CaissePointageDefaultArgs> = $Result.GetResult<Prisma.$CaissePointagePayload, S>

  type CaissePointageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaissePointageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaissePointageCountAggregateInputType | true
    }

  export interface CaissePointageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaissePointage'], meta: { name: 'CaissePointage' } }
    /**
     * Find zero or one CaissePointage that matches the filter.
     * @param {CaissePointageFindUniqueArgs} args - Arguments to find a CaissePointage
     * @example
     * // Get one CaissePointage
     * const caissePointage = await prisma.caissePointage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaissePointageFindUniqueArgs>(args: SelectSubset<T, CaissePointageFindUniqueArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaissePointage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaissePointageFindUniqueOrThrowArgs} args - Arguments to find a CaissePointage
     * @example
     * // Get one CaissePointage
     * const caissePointage = await prisma.caissePointage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaissePointageFindUniqueOrThrowArgs>(args: SelectSubset<T, CaissePointageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaissePointage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageFindFirstArgs} args - Arguments to find a CaissePointage
     * @example
     * // Get one CaissePointage
     * const caissePointage = await prisma.caissePointage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaissePointageFindFirstArgs>(args?: SelectSubset<T, CaissePointageFindFirstArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaissePointage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageFindFirstOrThrowArgs} args - Arguments to find a CaissePointage
     * @example
     * // Get one CaissePointage
     * const caissePointage = await prisma.caissePointage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaissePointageFindFirstOrThrowArgs>(args?: SelectSubset<T, CaissePointageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaissePointages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaissePointages
     * const caissePointages = await prisma.caissePointage.findMany()
     * 
     * // Get first 10 CaissePointages
     * const caissePointages = await prisma.caissePointage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caissePointageWithIdOnly = await prisma.caissePointage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaissePointageFindManyArgs>(args?: SelectSubset<T, CaissePointageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaissePointage.
     * @param {CaissePointageCreateArgs} args - Arguments to create a CaissePointage.
     * @example
     * // Create one CaissePointage
     * const CaissePointage = await prisma.caissePointage.create({
     *   data: {
     *     // ... data to create a CaissePointage
     *   }
     * })
     * 
     */
    create<T extends CaissePointageCreateArgs>(args: SelectSubset<T, CaissePointageCreateArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaissePointages.
     * @param {CaissePointageCreateManyArgs} args - Arguments to create many CaissePointages.
     * @example
     * // Create many CaissePointages
     * const caissePointage = await prisma.caissePointage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaissePointageCreateManyArgs>(args?: SelectSubset<T, CaissePointageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaissePointages and returns the data saved in the database.
     * @param {CaissePointageCreateManyAndReturnArgs} args - Arguments to create many CaissePointages.
     * @example
     * // Create many CaissePointages
     * const caissePointage = await prisma.caissePointage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaissePointages and only return the `id`
     * const caissePointageWithIdOnly = await prisma.caissePointage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaissePointageCreateManyAndReturnArgs>(args?: SelectSubset<T, CaissePointageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaissePointage.
     * @param {CaissePointageDeleteArgs} args - Arguments to delete one CaissePointage.
     * @example
     * // Delete one CaissePointage
     * const CaissePointage = await prisma.caissePointage.delete({
     *   where: {
     *     // ... filter to delete one CaissePointage
     *   }
     * })
     * 
     */
    delete<T extends CaissePointageDeleteArgs>(args: SelectSubset<T, CaissePointageDeleteArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaissePointage.
     * @param {CaissePointageUpdateArgs} args - Arguments to update one CaissePointage.
     * @example
     * // Update one CaissePointage
     * const caissePointage = await prisma.caissePointage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaissePointageUpdateArgs>(args: SelectSubset<T, CaissePointageUpdateArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaissePointages.
     * @param {CaissePointageDeleteManyArgs} args - Arguments to filter CaissePointages to delete.
     * @example
     * // Delete a few CaissePointages
     * const { count } = await prisma.caissePointage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaissePointageDeleteManyArgs>(args?: SelectSubset<T, CaissePointageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaissePointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaissePointages
     * const caissePointage = await prisma.caissePointage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaissePointageUpdateManyArgs>(args: SelectSubset<T, CaissePointageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaissePointages and returns the data updated in the database.
     * @param {CaissePointageUpdateManyAndReturnArgs} args - Arguments to update many CaissePointages.
     * @example
     * // Update many CaissePointages
     * const caissePointage = await prisma.caissePointage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaissePointages and only return the `id`
     * const caissePointageWithIdOnly = await prisma.caissePointage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaissePointageUpdateManyAndReturnArgs>(args: SelectSubset<T, CaissePointageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaissePointage.
     * @param {CaissePointageUpsertArgs} args - Arguments to update or create a CaissePointage.
     * @example
     * // Update or create a CaissePointage
     * const caissePointage = await prisma.caissePointage.upsert({
     *   create: {
     *     // ... data to create a CaissePointage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaissePointage we want to update
     *   }
     * })
     */
    upsert<T extends CaissePointageUpsertArgs>(args: SelectSubset<T, CaissePointageUpsertArgs<ExtArgs>>): Prisma__CaissePointageClient<$Result.GetResult<Prisma.$CaissePointagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaissePointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageCountArgs} args - Arguments to filter CaissePointages to count.
     * @example
     * // Count the number of CaissePointages
     * const count = await prisma.caissePointage.count({
     *   where: {
     *     // ... the filter for the CaissePointages we want to count
     *   }
     * })
    **/
    count<T extends CaissePointageCountArgs>(
      args?: Subset<T, CaissePointageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaissePointageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaissePointage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaissePointageAggregateArgs>(args: Subset<T, CaissePointageAggregateArgs>): Prisma.PrismaPromise<GetCaissePointageAggregateType<T>>

    /**
     * Group by CaissePointage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaissePointageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaissePointageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaissePointageGroupByArgs['orderBy'] }
        : { orderBy?: CaissePointageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaissePointageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaissePointageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaissePointage model
   */
  readonly fields: CaissePointageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaissePointage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaissePointageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaissePointage model
   */
  interface CaissePointageFieldRefs {
    readonly id: FieldRef<"CaissePointage", 'String'>
    readonly dernierPointageReel: FieldRef<"CaissePointage", 'Int'>
    readonly dateDernierPointage: FieldRef<"CaissePointage", 'String'>
    readonly notes: FieldRef<"CaissePointage", 'String'>
    readonly updatedAt: FieldRef<"CaissePointage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CaissePointage findUnique
   */
  export type CaissePointageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter, which CaissePointage to fetch.
     */
    where: CaissePointageWhereUniqueInput
  }

  /**
   * CaissePointage findUniqueOrThrow
   */
  export type CaissePointageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter, which CaissePointage to fetch.
     */
    where: CaissePointageWhereUniqueInput
  }

  /**
   * CaissePointage findFirst
   */
  export type CaissePointageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter, which CaissePointage to fetch.
     */
    where?: CaissePointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaissePointages to fetch.
     */
    orderBy?: CaissePointageOrderByWithRelationInput | CaissePointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaissePointages.
     */
    cursor?: CaissePointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaissePointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaissePointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaissePointages.
     */
    distinct?: CaissePointageScalarFieldEnum | CaissePointageScalarFieldEnum[]
  }

  /**
   * CaissePointage findFirstOrThrow
   */
  export type CaissePointageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter, which CaissePointage to fetch.
     */
    where?: CaissePointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaissePointages to fetch.
     */
    orderBy?: CaissePointageOrderByWithRelationInput | CaissePointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaissePointages.
     */
    cursor?: CaissePointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaissePointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaissePointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaissePointages.
     */
    distinct?: CaissePointageScalarFieldEnum | CaissePointageScalarFieldEnum[]
  }

  /**
   * CaissePointage findMany
   */
  export type CaissePointageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter, which CaissePointages to fetch.
     */
    where?: CaissePointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaissePointages to fetch.
     */
    orderBy?: CaissePointageOrderByWithRelationInput | CaissePointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaissePointages.
     */
    cursor?: CaissePointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaissePointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaissePointages.
     */
    skip?: number
    distinct?: CaissePointageScalarFieldEnum | CaissePointageScalarFieldEnum[]
  }

  /**
   * CaissePointage create
   */
  export type CaissePointageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * The data needed to create a CaissePointage.
     */
    data: XOR<CaissePointageCreateInput, CaissePointageUncheckedCreateInput>
  }

  /**
   * CaissePointage createMany
   */
  export type CaissePointageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaissePointages.
     */
    data: CaissePointageCreateManyInput | CaissePointageCreateManyInput[]
  }

  /**
   * CaissePointage createManyAndReturn
   */
  export type CaissePointageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * The data used to create many CaissePointages.
     */
    data: CaissePointageCreateManyInput | CaissePointageCreateManyInput[]
  }

  /**
   * CaissePointage update
   */
  export type CaissePointageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * The data needed to update a CaissePointage.
     */
    data: XOR<CaissePointageUpdateInput, CaissePointageUncheckedUpdateInput>
    /**
     * Choose, which CaissePointage to update.
     */
    where: CaissePointageWhereUniqueInput
  }

  /**
   * CaissePointage updateMany
   */
  export type CaissePointageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaissePointages.
     */
    data: XOR<CaissePointageUpdateManyMutationInput, CaissePointageUncheckedUpdateManyInput>
    /**
     * Filter which CaissePointages to update
     */
    where?: CaissePointageWhereInput
    /**
     * Limit how many CaissePointages to update.
     */
    limit?: number
  }

  /**
   * CaissePointage updateManyAndReturn
   */
  export type CaissePointageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * The data used to update CaissePointages.
     */
    data: XOR<CaissePointageUpdateManyMutationInput, CaissePointageUncheckedUpdateManyInput>
    /**
     * Filter which CaissePointages to update
     */
    where?: CaissePointageWhereInput
    /**
     * Limit how many CaissePointages to update.
     */
    limit?: number
  }

  /**
   * CaissePointage upsert
   */
  export type CaissePointageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * The filter to search for the CaissePointage to update in case it exists.
     */
    where: CaissePointageWhereUniqueInput
    /**
     * In case the CaissePointage found by the `where` argument doesn't exist, create a new CaissePointage with this data.
     */
    create: XOR<CaissePointageCreateInput, CaissePointageUncheckedCreateInput>
    /**
     * In case the CaissePointage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaissePointageUpdateInput, CaissePointageUncheckedUpdateInput>
  }

  /**
   * CaissePointage delete
   */
  export type CaissePointageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
    /**
     * Filter which CaissePointage to delete.
     */
    where: CaissePointageWhereUniqueInput
  }

  /**
   * CaissePointage deleteMany
   */
  export type CaissePointageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaissePointages to delete
     */
    where?: CaissePointageWhereInput
    /**
     * Limit how many CaissePointages to delete.
     */
    limit?: number
  }

  /**
   * CaissePointage without action
   */
  export type CaissePointageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaissePointage
     */
    select?: CaissePointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaissePointage
     */
    omit?: CaissePointageOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userName: string | null
    action: string | null
    detail: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userName: string | null
    action: string | null
    detail: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    timestamp: number
    userName: number
    action: number
    detail: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    userName?: true
    action?: true
    detail?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    userName?: true
    action?: true
    detail?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    userName?: true
    action?: true
    detail?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    timestamp: Date
    userName: string
    action: string
    detail: string
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userName?: boolean
    action?: boolean
    detail?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userName?: boolean
    action?: boolean
    detail?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userName?: boolean
    action?: boolean
    detail?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    userName?: boolean
    action?: boolean
    detail?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "userName" | "action" | "detail", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      userName: string
      action: string
      detail: string
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly userName: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly detail: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model RelanceConfig
   */

  export type AggregateRelanceConfig = {
    _count: RelanceConfigCountAggregateOutputType | null
    _min: RelanceConfigMinAggregateOutputType | null
    _max: RelanceConfigMaxAggregateOutputType | null
  }

  export type RelanceConfigMinAggregateOutputType = {
    id: string | null
    messageTemplate: string | null
    lienPaiementDefaut: string | null
    numeroWhatsAppRelance: string | null
    updatedAt: Date | null
  }

  export type RelanceConfigMaxAggregateOutputType = {
    id: string | null
    messageTemplate: string | null
    lienPaiementDefaut: string | null
    numeroWhatsAppRelance: string | null
    updatedAt: Date | null
  }

  export type RelanceConfigCountAggregateOutputType = {
    id: number
    messageTemplate: number
    lienPaiementDefaut: number
    numeroWhatsAppRelance: number
    updatedAt: number
    _all: number
  }


  export type RelanceConfigMinAggregateInputType = {
    id?: true
    messageTemplate?: true
    lienPaiementDefaut?: true
    numeroWhatsAppRelance?: true
    updatedAt?: true
  }

  export type RelanceConfigMaxAggregateInputType = {
    id?: true
    messageTemplate?: true
    lienPaiementDefaut?: true
    numeroWhatsAppRelance?: true
    updatedAt?: true
  }

  export type RelanceConfigCountAggregateInputType = {
    id?: true
    messageTemplate?: true
    lienPaiementDefaut?: true
    numeroWhatsAppRelance?: true
    updatedAt?: true
    _all?: true
  }

  export type RelanceConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelanceConfig to aggregate.
     */
    where?: RelanceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelanceConfigs to fetch.
     */
    orderBy?: RelanceConfigOrderByWithRelationInput | RelanceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelanceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelanceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelanceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelanceConfigs
    **/
    _count?: true | RelanceConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelanceConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelanceConfigMaxAggregateInputType
  }

  export type GetRelanceConfigAggregateType<T extends RelanceConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateRelanceConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelanceConfig[P]>
      : GetScalarType<T[P], AggregateRelanceConfig[P]>
  }




  export type RelanceConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelanceConfigWhereInput
    orderBy?: RelanceConfigOrderByWithAggregationInput | RelanceConfigOrderByWithAggregationInput[]
    by: RelanceConfigScalarFieldEnum[] | RelanceConfigScalarFieldEnum
    having?: RelanceConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelanceConfigCountAggregateInputType | true
    _min?: RelanceConfigMinAggregateInputType
    _max?: RelanceConfigMaxAggregateInputType
  }

  export type RelanceConfigGroupByOutputType = {
    id: string
    messageTemplate: string
    lienPaiementDefaut: string
    numeroWhatsAppRelance: string | null
    updatedAt: Date
    _count: RelanceConfigCountAggregateOutputType | null
    _min: RelanceConfigMinAggregateOutputType | null
    _max: RelanceConfigMaxAggregateOutputType | null
  }

  type GetRelanceConfigGroupByPayload<T extends RelanceConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelanceConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelanceConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelanceConfigGroupByOutputType[P]>
            : GetScalarType<T[P], RelanceConfigGroupByOutputType[P]>
        }
      >
    >


  export type RelanceConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageTemplate?: boolean
    lienPaiementDefaut?: boolean
    numeroWhatsAppRelance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["relanceConfig"]>

  export type RelanceConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageTemplate?: boolean
    lienPaiementDefaut?: boolean
    numeroWhatsAppRelance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["relanceConfig"]>

  export type RelanceConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageTemplate?: boolean
    lienPaiementDefaut?: boolean
    numeroWhatsAppRelance?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["relanceConfig"]>

  export type RelanceConfigSelectScalar = {
    id?: boolean
    messageTemplate?: boolean
    lienPaiementDefaut?: boolean
    numeroWhatsAppRelance?: boolean
    updatedAt?: boolean
  }

  export type RelanceConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageTemplate" | "lienPaiementDefaut" | "numeroWhatsAppRelance" | "updatedAt", ExtArgs["result"]["relanceConfig"]>

  export type $RelanceConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelanceConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageTemplate: string
      lienPaiementDefaut: string
      numeroWhatsAppRelance: string | null
      updatedAt: Date
    }, ExtArgs["result"]["relanceConfig"]>
    composites: {}
  }

  type RelanceConfigGetPayload<S extends boolean | null | undefined | RelanceConfigDefaultArgs> = $Result.GetResult<Prisma.$RelanceConfigPayload, S>

  type RelanceConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelanceConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelanceConfigCountAggregateInputType | true
    }

  export interface RelanceConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelanceConfig'], meta: { name: 'RelanceConfig' } }
    /**
     * Find zero or one RelanceConfig that matches the filter.
     * @param {RelanceConfigFindUniqueArgs} args - Arguments to find a RelanceConfig
     * @example
     * // Get one RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelanceConfigFindUniqueArgs>(args: SelectSubset<T, RelanceConfigFindUniqueArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelanceConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelanceConfigFindUniqueOrThrowArgs} args - Arguments to find a RelanceConfig
     * @example
     * // Get one RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelanceConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, RelanceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelanceConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigFindFirstArgs} args - Arguments to find a RelanceConfig
     * @example
     * // Get one RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelanceConfigFindFirstArgs>(args?: SelectSubset<T, RelanceConfigFindFirstArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelanceConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigFindFirstOrThrowArgs} args - Arguments to find a RelanceConfig
     * @example
     * // Get one RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelanceConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, RelanceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelanceConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelanceConfigs
     * const relanceConfigs = await prisma.relanceConfig.findMany()
     * 
     * // Get first 10 RelanceConfigs
     * const relanceConfigs = await prisma.relanceConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relanceConfigWithIdOnly = await prisma.relanceConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelanceConfigFindManyArgs>(args?: SelectSubset<T, RelanceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelanceConfig.
     * @param {RelanceConfigCreateArgs} args - Arguments to create a RelanceConfig.
     * @example
     * // Create one RelanceConfig
     * const RelanceConfig = await prisma.relanceConfig.create({
     *   data: {
     *     // ... data to create a RelanceConfig
     *   }
     * })
     * 
     */
    create<T extends RelanceConfigCreateArgs>(args: SelectSubset<T, RelanceConfigCreateArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelanceConfigs.
     * @param {RelanceConfigCreateManyArgs} args - Arguments to create many RelanceConfigs.
     * @example
     * // Create many RelanceConfigs
     * const relanceConfig = await prisma.relanceConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelanceConfigCreateManyArgs>(args?: SelectSubset<T, RelanceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelanceConfigs and returns the data saved in the database.
     * @param {RelanceConfigCreateManyAndReturnArgs} args - Arguments to create many RelanceConfigs.
     * @example
     * // Create many RelanceConfigs
     * const relanceConfig = await prisma.relanceConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelanceConfigs and only return the `id`
     * const relanceConfigWithIdOnly = await prisma.relanceConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelanceConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, RelanceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelanceConfig.
     * @param {RelanceConfigDeleteArgs} args - Arguments to delete one RelanceConfig.
     * @example
     * // Delete one RelanceConfig
     * const RelanceConfig = await prisma.relanceConfig.delete({
     *   where: {
     *     // ... filter to delete one RelanceConfig
     *   }
     * })
     * 
     */
    delete<T extends RelanceConfigDeleteArgs>(args: SelectSubset<T, RelanceConfigDeleteArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelanceConfig.
     * @param {RelanceConfigUpdateArgs} args - Arguments to update one RelanceConfig.
     * @example
     * // Update one RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelanceConfigUpdateArgs>(args: SelectSubset<T, RelanceConfigUpdateArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelanceConfigs.
     * @param {RelanceConfigDeleteManyArgs} args - Arguments to filter RelanceConfigs to delete.
     * @example
     * // Delete a few RelanceConfigs
     * const { count } = await prisma.relanceConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelanceConfigDeleteManyArgs>(args?: SelectSubset<T, RelanceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelanceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelanceConfigs
     * const relanceConfig = await prisma.relanceConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelanceConfigUpdateManyArgs>(args: SelectSubset<T, RelanceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelanceConfigs and returns the data updated in the database.
     * @param {RelanceConfigUpdateManyAndReturnArgs} args - Arguments to update many RelanceConfigs.
     * @example
     * // Update many RelanceConfigs
     * const relanceConfig = await prisma.relanceConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelanceConfigs and only return the `id`
     * const relanceConfigWithIdOnly = await prisma.relanceConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelanceConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, RelanceConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelanceConfig.
     * @param {RelanceConfigUpsertArgs} args - Arguments to update or create a RelanceConfig.
     * @example
     * // Update or create a RelanceConfig
     * const relanceConfig = await prisma.relanceConfig.upsert({
     *   create: {
     *     // ... data to create a RelanceConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelanceConfig we want to update
     *   }
     * })
     */
    upsert<T extends RelanceConfigUpsertArgs>(args: SelectSubset<T, RelanceConfigUpsertArgs<ExtArgs>>): Prisma__RelanceConfigClient<$Result.GetResult<Prisma.$RelanceConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelanceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigCountArgs} args - Arguments to filter RelanceConfigs to count.
     * @example
     * // Count the number of RelanceConfigs
     * const count = await prisma.relanceConfig.count({
     *   where: {
     *     // ... the filter for the RelanceConfigs we want to count
     *   }
     * })
    **/
    count<T extends RelanceConfigCountArgs>(
      args?: Subset<T, RelanceConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelanceConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelanceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelanceConfigAggregateArgs>(args: Subset<T, RelanceConfigAggregateArgs>): Prisma.PrismaPromise<GetRelanceConfigAggregateType<T>>

    /**
     * Group by RelanceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelanceConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelanceConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelanceConfigGroupByArgs['orderBy'] }
        : { orderBy?: RelanceConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelanceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelanceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelanceConfig model
   */
  readonly fields: RelanceConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelanceConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelanceConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelanceConfig model
   */
  interface RelanceConfigFieldRefs {
    readonly id: FieldRef<"RelanceConfig", 'String'>
    readonly messageTemplate: FieldRef<"RelanceConfig", 'String'>
    readonly lienPaiementDefaut: FieldRef<"RelanceConfig", 'String'>
    readonly numeroWhatsAppRelance: FieldRef<"RelanceConfig", 'String'>
    readonly updatedAt: FieldRef<"RelanceConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelanceConfig findUnique
   */
  export type RelanceConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter, which RelanceConfig to fetch.
     */
    where: RelanceConfigWhereUniqueInput
  }

  /**
   * RelanceConfig findUniqueOrThrow
   */
  export type RelanceConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter, which RelanceConfig to fetch.
     */
    where: RelanceConfigWhereUniqueInput
  }

  /**
   * RelanceConfig findFirst
   */
  export type RelanceConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter, which RelanceConfig to fetch.
     */
    where?: RelanceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelanceConfigs to fetch.
     */
    orderBy?: RelanceConfigOrderByWithRelationInput | RelanceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelanceConfigs.
     */
    cursor?: RelanceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelanceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelanceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelanceConfigs.
     */
    distinct?: RelanceConfigScalarFieldEnum | RelanceConfigScalarFieldEnum[]
  }

  /**
   * RelanceConfig findFirstOrThrow
   */
  export type RelanceConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter, which RelanceConfig to fetch.
     */
    where?: RelanceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelanceConfigs to fetch.
     */
    orderBy?: RelanceConfigOrderByWithRelationInput | RelanceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelanceConfigs.
     */
    cursor?: RelanceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelanceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelanceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelanceConfigs.
     */
    distinct?: RelanceConfigScalarFieldEnum | RelanceConfigScalarFieldEnum[]
  }

  /**
   * RelanceConfig findMany
   */
  export type RelanceConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter, which RelanceConfigs to fetch.
     */
    where?: RelanceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelanceConfigs to fetch.
     */
    orderBy?: RelanceConfigOrderByWithRelationInput | RelanceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelanceConfigs.
     */
    cursor?: RelanceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelanceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelanceConfigs.
     */
    skip?: number
    distinct?: RelanceConfigScalarFieldEnum | RelanceConfigScalarFieldEnum[]
  }

  /**
   * RelanceConfig create
   */
  export type RelanceConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a RelanceConfig.
     */
    data: XOR<RelanceConfigCreateInput, RelanceConfigUncheckedCreateInput>
  }

  /**
   * RelanceConfig createMany
   */
  export type RelanceConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelanceConfigs.
     */
    data: RelanceConfigCreateManyInput | RelanceConfigCreateManyInput[]
  }

  /**
   * RelanceConfig createManyAndReturn
   */
  export type RelanceConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * The data used to create many RelanceConfigs.
     */
    data: RelanceConfigCreateManyInput | RelanceConfigCreateManyInput[]
  }

  /**
   * RelanceConfig update
   */
  export type RelanceConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a RelanceConfig.
     */
    data: XOR<RelanceConfigUpdateInput, RelanceConfigUncheckedUpdateInput>
    /**
     * Choose, which RelanceConfig to update.
     */
    where: RelanceConfigWhereUniqueInput
  }

  /**
   * RelanceConfig updateMany
   */
  export type RelanceConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelanceConfigs.
     */
    data: XOR<RelanceConfigUpdateManyMutationInput, RelanceConfigUncheckedUpdateManyInput>
    /**
     * Filter which RelanceConfigs to update
     */
    where?: RelanceConfigWhereInput
    /**
     * Limit how many RelanceConfigs to update.
     */
    limit?: number
  }

  /**
   * RelanceConfig updateManyAndReturn
   */
  export type RelanceConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * The data used to update RelanceConfigs.
     */
    data: XOR<RelanceConfigUpdateManyMutationInput, RelanceConfigUncheckedUpdateManyInput>
    /**
     * Filter which RelanceConfigs to update
     */
    where?: RelanceConfigWhereInput
    /**
     * Limit how many RelanceConfigs to update.
     */
    limit?: number
  }

  /**
   * RelanceConfig upsert
   */
  export type RelanceConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the RelanceConfig to update in case it exists.
     */
    where: RelanceConfigWhereUniqueInput
    /**
     * In case the RelanceConfig found by the `where` argument doesn't exist, create a new RelanceConfig with this data.
     */
    create: XOR<RelanceConfigCreateInput, RelanceConfigUncheckedCreateInput>
    /**
     * In case the RelanceConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelanceConfigUpdateInput, RelanceConfigUncheckedUpdateInput>
  }

  /**
   * RelanceConfig delete
   */
  export type RelanceConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
    /**
     * Filter which RelanceConfig to delete.
     */
    where: RelanceConfigWhereUniqueInput
  }

  /**
   * RelanceConfig deleteMany
   */
  export type RelanceConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelanceConfigs to delete
     */
    where?: RelanceConfigWhereInput
    /**
     * Limit how many RelanceConfigs to delete.
     */
    limit?: number
  }

  /**
   * RelanceConfig without action
   */
  export type RelanceConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelanceConfig
     */
    select?: RelanceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelanceConfig
     */
    omit?: RelanceConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    name: 'name',
    role: 'role',
    roleLabel: 'roleLabel',
    password: 'password',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompteScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    email: 'email',
    motDePasse: 'motDePasse',
    dateOuverture: 'dateOuverture',
    dateReabonnement: 'dateReabonnement',
    coutRechargeMensuel: 'coutRechargeMensuel',
    capacitePlaces: 'capacitePlaces',
    maxProfils: 'maxProfils',
    statut: 'statut',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompteScalarFieldEnum = (typeof CompteScalarFieldEnum)[keyof typeof CompteScalarFieldEnum]


  export const ProfilScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    codePin: 'codePin',
    statut: 'statut',
    compteId: 'compteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfilScalarFieldEnum = (typeof ProfilScalarFieldEnum)[keyof typeof ProfilScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    telephone: 'telephone',
    ancienId: 'ancienId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const AbonnementScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    profilId: 'profilId',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    tarif: 'tarif',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AbonnementScalarFieldEnum = (typeof AbonnementScalarFieldEnum)[keyof typeof AbonnementScalarFieldEnum]


  export const MouvementCaisseScalarFieldEnum: {
    id: 'id',
    type: 'type',
    beneficiaire: 'beneficiaire',
    montant: 'montant',
    date: 'date',
    motif: 'motif',
    createdAt: 'createdAt'
  };

  export type MouvementCaisseScalarFieldEnum = (typeof MouvementCaisseScalarFieldEnum)[keyof typeof MouvementCaisseScalarFieldEnum]


  export const CaissePointageScalarFieldEnum: {
    id: 'id',
    dernierPointageReel: 'dernierPointageReel',
    dateDernierPointage: 'dateDernierPointage',
    notes: 'notes',
    updatedAt: 'updatedAt'
  };

  export type CaissePointageScalarFieldEnum = (typeof CaissePointageScalarFieldEnum)[keyof typeof CaissePointageScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    userName: 'userName',
    action: 'action',
    detail: 'detail'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const RelanceConfigScalarFieldEnum: {
    id: 'id',
    messageTemplate: 'messageTemplate',
    lienPaiementDefaut: 'lienPaiementDefaut',
    numeroWhatsAppRelance: 'numeroWhatsAppRelance',
    updatedAt: 'updatedAt'
  };

  export type RelanceConfigScalarFieldEnum = (typeof RelanceConfigScalarFieldEnum)[keyof typeof RelanceConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    roleLabel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    roleLabel?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    roleLabel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    roleLabel?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    roleLabel?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompteWhereInput = {
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    id?: StringFilter<"Compte"> | string
    libelle?: StringFilter<"Compte"> | string
    email?: StringFilter<"Compte"> | string
    motDePasse?: StringFilter<"Compte"> | string
    dateOuverture?: StringFilter<"Compte"> | string
    dateReabonnement?: StringFilter<"Compte"> | string
    coutRechargeMensuel?: IntFilter<"Compte"> | number
    capacitePlaces?: IntFilter<"Compte"> | number
    maxProfils?: IntFilter<"Compte"> | number
    statut?: StringFilter<"Compte"> | string
    notes?: StringNullableFilter<"Compte"> | string | null
    createdAt?: DateTimeFilter<"Compte"> | Date | string
    updatedAt?: DateTimeFilter<"Compte"> | Date | string
    profils?: ProfilListRelationFilter
  }

  export type CompteOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateOuverture?: SortOrder
    dateReabonnement?: SortOrder
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profils?: ProfilOrderByRelationAggregateInput
  }

  export type CompteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    libelle?: StringFilter<"Compte"> | string
    email?: StringFilter<"Compte"> | string
    motDePasse?: StringFilter<"Compte"> | string
    dateOuverture?: StringFilter<"Compte"> | string
    dateReabonnement?: StringFilter<"Compte"> | string
    coutRechargeMensuel?: IntFilter<"Compte"> | number
    capacitePlaces?: IntFilter<"Compte"> | number
    maxProfils?: IntFilter<"Compte"> | number
    statut?: StringFilter<"Compte"> | string
    notes?: StringNullableFilter<"Compte"> | string | null
    createdAt?: DateTimeFilter<"Compte"> | Date | string
    updatedAt?: DateTimeFilter<"Compte"> | Date | string
    profils?: ProfilListRelationFilter
  }, "id">

  export type CompteOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateOuverture?: SortOrder
    dateReabonnement?: SortOrder
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompteCountOrderByAggregateInput
    _avg?: CompteAvgOrderByAggregateInput
    _max?: CompteMaxOrderByAggregateInput
    _min?: CompteMinOrderByAggregateInput
    _sum?: CompteSumOrderByAggregateInput
  }

  export type CompteScalarWhereWithAggregatesInput = {
    AND?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    OR?: CompteScalarWhereWithAggregatesInput[]
    NOT?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Compte"> | string
    libelle?: StringWithAggregatesFilter<"Compte"> | string
    email?: StringWithAggregatesFilter<"Compte"> | string
    motDePasse?: StringWithAggregatesFilter<"Compte"> | string
    dateOuverture?: StringWithAggregatesFilter<"Compte"> | string
    dateReabonnement?: StringWithAggregatesFilter<"Compte"> | string
    coutRechargeMensuel?: IntWithAggregatesFilter<"Compte"> | number
    capacitePlaces?: IntWithAggregatesFilter<"Compte"> | number
    maxProfils?: IntWithAggregatesFilter<"Compte"> | number
    statut?: StringWithAggregatesFilter<"Compte"> | string
    notes?: StringNullableWithAggregatesFilter<"Compte"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Compte"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Compte"> | Date | string
  }

  export type ProfilWhereInput = {
    AND?: ProfilWhereInput | ProfilWhereInput[]
    OR?: ProfilWhereInput[]
    NOT?: ProfilWhereInput | ProfilWhereInput[]
    id?: StringFilter<"Profil"> | string
    nom?: StringFilter<"Profil"> | string
    codePin?: StringFilter<"Profil"> | string
    statut?: StringFilter<"Profil"> | string
    compteId?: StringFilter<"Profil"> | string
    createdAt?: DateTimeFilter<"Profil"> | Date | string
    updatedAt?: DateTimeFilter<"Profil"> | Date | string
    compte?: XOR<CompteScalarRelationFilter, CompteWhereInput>
    abonnements?: AbonnementListRelationFilter
  }

  export type ProfilOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    codePin?: SortOrder
    statut?: SortOrder
    compteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    compte?: CompteOrderByWithRelationInput
    abonnements?: AbonnementOrderByRelationAggregateInput
  }

  export type ProfilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfilWhereInput | ProfilWhereInput[]
    OR?: ProfilWhereInput[]
    NOT?: ProfilWhereInput | ProfilWhereInput[]
    nom?: StringFilter<"Profil"> | string
    codePin?: StringFilter<"Profil"> | string
    statut?: StringFilter<"Profil"> | string
    compteId?: StringFilter<"Profil"> | string
    createdAt?: DateTimeFilter<"Profil"> | Date | string
    updatedAt?: DateTimeFilter<"Profil"> | Date | string
    compte?: XOR<CompteScalarRelationFilter, CompteWhereInput>
    abonnements?: AbonnementListRelationFilter
  }, "id">

  export type ProfilOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    codePin?: SortOrder
    statut?: SortOrder
    compteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfilCountOrderByAggregateInput
    _max?: ProfilMaxOrderByAggregateInput
    _min?: ProfilMinOrderByAggregateInput
  }

  export type ProfilScalarWhereWithAggregatesInput = {
    AND?: ProfilScalarWhereWithAggregatesInput | ProfilScalarWhereWithAggregatesInput[]
    OR?: ProfilScalarWhereWithAggregatesInput[]
    NOT?: ProfilScalarWhereWithAggregatesInput | ProfilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profil"> | string
    nom?: StringWithAggregatesFilter<"Profil"> | string
    codePin?: StringWithAggregatesFilter<"Profil"> | string
    statut?: StringWithAggregatesFilter<"Profil"> | string
    compteId?: StringWithAggregatesFilter<"Profil"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profil"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profil"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    ancienId?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    abonnements?: AbonnementListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    ancienId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    abonnements?: AbonnementOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    ancienId?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    abonnements?: AbonnementListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    ancienId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    telephone?: StringWithAggregatesFilter<"Client"> | string
    ancienId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type AbonnementWhereInput = {
    AND?: AbonnementWhereInput | AbonnementWhereInput[]
    OR?: AbonnementWhereInput[]
    NOT?: AbonnementWhereInput | AbonnementWhereInput[]
    id?: StringFilter<"Abonnement"> | string
    clientId?: StringFilter<"Abonnement"> | string
    profilId?: StringFilter<"Abonnement"> | string
    dateDebut?: StringFilter<"Abonnement"> | string
    dateFin?: StringFilter<"Abonnement"> | string
    tarif?: IntFilter<"Abonnement"> | number
    statut?: StringFilter<"Abonnement"> | string
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    profil?: XOR<ProfilScalarRelationFilter, ProfilWhereInput>
  }

  export type AbonnementOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    profilId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    tarif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    profil?: ProfilOrderByWithRelationInput
  }

  export type AbonnementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbonnementWhereInput | AbonnementWhereInput[]
    OR?: AbonnementWhereInput[]
    NOT?: AbonnementWhereInput | AbonnementWhereInput[]
    clientId?: StringFilter<"Abonnement"> | string
    profilId?: StringFilter<"Abonnement"> | string
    dateDebut?: StringFilter<"Abonnement"> | string
    dateFin?: StringFilter<"Abonnement"> | string
    tarif?: IntFilter<"Abonnement"> | number
    statut?: StringFilter<"Abonnement"> | string
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    profil?: XOR<ProfilScalarRelationFilter, ProfilWhereInput>
  }, "id">

  export type AbonnementOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    profilId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    tarif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AbonnementCountOrderByAggregateInput
    _avg?: AbonnementAvgOrderByAggregateInput
    _max?: AbonnementMaxOrderByAggregateInput
    _min?: AbonnementMinOrderByAggregateInput
    _sum?: AbonnementSumOrderByAggregateInput
  }

  export type AbonnementScalarWhereWithAggregatesInput = {
    AND?: AbonnementScalarWhereWithAggregatesInput | AbonnementScalarWhereWithAggregatesInput[]
    OR?: AbonnementScalarWhereWithAggregatesInput[]
    NOT?: AbonnementScalarWhereWithAggregatesInput | AbonnementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Abonnement"> | string
    clientId?: StringWithAggregatesFilter<"Abonnement"> | string
    profilId?: StringWithAggregatesFilter<"Abonnement"> | string
    dateDebut?: StringWithAggregatesFilter<"Abonnement"> | string
    dateFin?: StringWithAggregatesFilter<"Abonnement"> | string
    tarif?: IntWithAggregatesFilter<"Abonnement"> | number
    statut?: StringWithAggregatesFilter<"Abonnement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Abonnement"> | Date | string
  }

  export type MouvementCaisseWhereInput = {
    AND?: MouvementCaisseWhereInput | MouvementCaisseWhereInput[]
    OR?: MouvementCaisseWhereInput[]
    NOT?: MouvementCaisseWhereInput | MouvementCaisseWhereInput[]
    id?: StringFilter<"MouvementCaisse"> | string
    type?: StringFilter<"MouvementCaisse"> | string
    beneficiaire?: StringFilter<"MouvementCaisse"> | string
    montant?: IntFilter<"MouvementCaisse"> | number
    date?: StringFilter<"MouvementCaisse"> | string
    motif?: StringNullableFilter<"MouvementCaisse"> | string | null
    createdAt?: DateTimeFilter<"MouvementCaisse"> | Date | string
  }

  export type MouvementCaisseOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    beneficiaire?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    motif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MouvementCaisseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MouvementCaisseWhereInput | MouvementCaisseWhereInput[]
    OR?: MouvementCaisseWhereInput[]
    NOT?: MouvementCaisseWhereInput | MouvementCaisseWhereInput[]
    type?: StringFilter<"MouvementCaisse"> | string
    beneficiaire?: StringFilter<"MouvementCaisse"> | string
    montant?: IntFilter<"MouvementCaisse"> | number
    date?: StringFilter<"MouvementCaisse"> | string
    motif?: StringNullableFilter<"MouvementCaisse"> | string | null
    createdAt?: DateTimeFilter<"MouvementCaisse"> | Date | string
  }, "id">

  export type MouvementCaisseOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    beneficiaire?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    motif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MouvementCaisseCountOrderByAggregateInput
    _avg?: MouvementCaisseAvgOrderByAggregateInput
    _max?: MouvementCaisseMaxOrderByAggregateInput
    _min?: MouvementCaisseMinOrderByAggregateInput
    _sum?: MouvementCaisseSumOrderByAggregateInput
  }

  export type MouvementCaisseScalarWhereWithAggregatesInput = {
    AND?: MouvementCaisseScalarWhereWithAggregatesInput | MouvementCaisseScalarWhereWithAggregatesInput[]
    OR?: MouvementCaisseScalarWhereWithAggregatesInput[]
    NOT?: MouvementCaisseScalarWhereWithAggregatesInput | MouvementCaisseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MouvementCaisse"> | string
    type?: StringWithAggregatesFilter<"MouvementCaisse"> | string
    beneficiaire?: StringWithAggregatesFilter<"MouvementCaisse"> | string
    montant?: IntWithAggregatesFilter<"MouvementCaisse"> | number
    date?: StringWithAggregatesFilter<"MouvementCaisse"> | string
    motif?: StringNullableWithAggregatesFilter<"MouvementCaisse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MouvementCaisse"> | Date | string
  }

  export type CaissePointageWhereInput = {
    AND?: CaissePointageWhereInput | CaissePointageWhereInput[]
    OR?: CaissePointageWhereInput[]
    NOT?: CaissePointageWhereInput | CaissePointageWhereInput[]
    id?: StringFilter<"CaissePointage"> | string
    dernierPointageReel?: IntFilter<"CaissePointage"> | number
    dateDernierPointage?: StringFilter<"CaissePointage"> | string
    notes?: StringNullableFilter<"CaissePointage"> | string | null
    updatedAt?: DateTimeFilter<"CaissePointage"> | Date | string
  }

  export type CaissePointageOrderByWithRelationInput = {
    id?: SortOrder
    dernierPointageReel?: SortOrder
    dateDernierPointage?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type CaissePointageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaissePointageWhereInput | CaissePointageWhereInput[]
    OR?: CaissePointageWhereInput[]
    NOT?: CaissePointageWhereInput | CaissePointageWhereInput[]
    dernierPointageReel?: IntFilter<"CaissePointage"> | number
    dateDernierPointage?: StringFilter<"CaissePointage"> | string
    notes?: StringNullableFilter<"CaissePointage"> | string | null
    updatedAt?: DateTimeFilter<"CaissePointage"> | Date | string
  }, "id">

  export type CaissePointageOrderByWithAggregationInput = {
    id?: SortOrder
    dernierPointageReel?: SortOrder
    dateDernierPointage?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CaissePointageCountOrderByAggregateInput
    _avg?: CaissePointageAvgOrderByAggregateInput
    _max?: CaissePointageMaxOrderByAggregateInput
    _min?: CaissePointageMinOrderByAggregateInput
    _sum?: CaissePointageSumOrderByAggregateInput
  }

  export type CaissePointageScalarWhereWithAggregatesInput = {
    AND?: CaissePointageScalarWhereWithAggregatesInput | CaissePointageScalarWhereWithAggregatesInput[]
    OR?: CaissePointageScalarWhereWithAggregatesInput[]
    NOT?: CaissePointageScalarWhereWithAggregatesInput | CaissePointageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaissePointage"> | string
    dernierPointageReel?: IntWithAggregatesFilter<"CaissePointage"> | number
    dateDernierPointage?: StringWithAggregatesFilter<"CaissePointage"> | string
    notes?: StringNullableWithAggregatesFilter<"CaissePointage"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"CaissePointage"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    userName?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    detail?: StringFilter<"AuditLog"> | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    detail?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    userName?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    detail?: StringFilter<"AuditLog"> | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    userName?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    detail?: StringWithAggregatesFilter<"AuditLog"> | string
  }

  export type RelanceConfigWhereInput = {
    AND?: RelanceConfigWhereInput | RelanceConfigWhereInput[]
    OR?: RelanceConfigWhereInput[]
    NOT?: RelanceConfigWhereInput | RelanceConfigWhereInput[]
    id?: StringFilter<"RelanceConfig"> | string
    messageTemplate?: StringFilter<"RelanceConfig"> | string
    lienPaiementDefaut?: StringFilter<"RelanceConfig"> | string
    numeroWhatsAppRelance?: StringNullableFilter<"RelanceConfig"> | string | null
    updatedAt?: DateTimeFilter<"RelanceConfig"> | Date | string
  }

  export type RelanceConfigOrderByWithRelationInput = {
    id?: SortOrder
    messageTemplate?: SortOrder
    lienPaiementDefaut?: SortOrder
    numeroWhatsAppRelance?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type RelanceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelanceConfigWhereInput | RelanceConfigWhereInput[]
    OR?: RelanceConfigWhereInput[]
    NOT?: RelanceConfigWhereInput | RelanceConfigWhereInput[]
    messageTemplate?: StringFilter<"RelanceConfig"> | string
    lienPaiementDefaut?: StringFilter<"RelanceConfig"> | string
    numeroWhatsAppRelance?: StringNullableFilter<"RelanceConfig"> | string | null
    updatedAt?: DateTimeFilter<"RelanceConfig"> | Date | string
  }, "id">

  export type RelanceConfigOrderByWithAggregationInput = {
    id?: SortOrder
    messageTemplate?: SortOrder
    lienPaiementDefaut?: SortOrder
    numeroWhatsAppRelance?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: RelanceConfigCountOrderByAggregateInput
    _max?: RelanceConfigMaxOrderByAggregateInput
    _min?: RelanceConfigMinOrderByAggregateInput
  }

  export type RelanceConfigScalarWhereWithAggregatesInput = {
    AND?: RelanceConfigScalarWhereWithAggregatesInput | RelanceConfigScalarWhereWithAggregatesInput[]
    OR?: RelanceConfigScalarWhereWithAggregatesInput[]
    NOT?: RelanceConfigScalarWhereWithAggregatesInput | RelanceConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelanceConfig"> | string
    messageTemplate?: StringWithAggregatesFilter<"RelanceConfig"> | string
    lienPaiementDefaut?: StringWithAggregatesFilter<"RelanceConfig"> | string
    numeroWhatsAppRelance?: StringNullableWithAggregatesFilter<"RelanceConfig"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"RelanceConfig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    role?: string
    roleLabel?: string
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    role?: string
    roleLabel?: string
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    roleLabel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    roleLabel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    role?: string
    roleLabel?: string
    password: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    roleLabel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    roleLabel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteCreateInput = {
    id?: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel?: number
    capacitePlaces?: number
    maxProfils?: number
    statut?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profils?: ProfilCreateNestedManyWithoutCompteInput
  }

  export type CompteUncheckedCreateInput = {
    id?: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel?: number
    capacitePlaces?: number
    maxProfils?: number
    statut?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profils?: ProfilUncheckedCreateNestedManyWithoutCompteInput
  }

  export type CompteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profils?: ProfilUpdateManyWithoutCompteNestedInput
  }

  export type CompteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profils?: ProfilUncheckedUpdateManyWithoutCompteNestedInput
  }

  export type CompteCreateManyInput = {
    id?: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel?: number
    capacitePlaces?: number
    maxProfils?: number
    statut?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilCreateInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    compte: CompteCreateNestedOneWithoutProfilsInput
    abonnements?: AbonnementCreateNestedManyWithoutProfilInput
  }

  export type ProfilUncheckedCreateInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    compteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutProfilInput
  }

  export type ProfilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compte?: CompteUpdateOneRequiredWithoutProfilsNestedInput
    abonnements?: AbonnementUpdateManyWithoutProfilNestedInput
  }

  export type ProfilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutProfilNestedInput
  }

  export type ProfilCreateManyInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    compteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    nom: string
    telephone: string
    ancienId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    nom: string
    telephone: string
    ancienId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    nom: string
    telephone: string
    ancienId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateInput = {
    id?: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAbonnementsInput
    profil: ProfilCreateNestedOneWithoutAbonnementsInput
  }

  export type AbonnementUncheckedCreateInput = {
    id?: string
    clientId: string
    profilId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAbonnementsNestedInput
    profil?: ProfilUpdateOneRequiredWithoutAbonnementsNestedInput
  }

  export type AbonnementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    profilId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateManyInput = {
    id?: string
    clientId: string
    profilId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    profilId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementCaisseCreateInput = {
    id?: string
    type: string
    beneficiaire: string
    montant: number
    date: string
    motif?: string | null
    createdAt?: Date | string
  }

  export type MouvementCaisseUncheckedCreateInput = {
    id?: string
    type: string
    beneficiaire: string
    montant: number
    date: string
    motif?: string | null
    createdAt?: Date | string
  }

  export type MouvementCaisseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    beneficiaire?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementCaisseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    beneficiaire?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementCaisseCreateManyInput = {
    id?: string
    type: string
    beneficiaire: string
    montant: number
    date: string
    motif?: string | null
    createdAt?: Date | string
  }

  export type MouvementCaisseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    beneficiaire?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementCaisseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    beneficiaire?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaissePointageCreateInput = {
    id?: string
    dernierPointageReel?: number
    dateDernierPointage?: string
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CaissePointageUncheckedCreateInput = {
    id?: string
    dernierPointageReel?: number
    dateDernierPointage?: string
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CaissePointageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dernierPointageReel?: IntFieldUpdateOperationsInput | number
    dateDernierPointage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaissePointageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dernierPointageReel?: IntFieldUpdateOperationsInput | number
    dateDernierPointage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaissePointageCreateManyInput = {
    id?: string
    dernierPointageReel?: number
    dateDernierPointage?: string
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CaissePointageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dernierPointageReel?: IntFieldUpdateOperationsInput | number
    dateDernierPointage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaissePointageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dernierPointageReel?: IntFieldUpdateOperationsInput | number
    dateDernierPointage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    timestamp?: Date | string
    userName: string
    action: string
    detail: string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    userName: string
    action: string
    detail: string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    userName: string
    action: string
    detail: string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type RelanceConfigCreateInput = {
    id?: string
    messageTemplate: string
    lienPaiementDefaut?: string
    numeroWhatsAppRelance?: string | null
    updatedAt?: Date | string
  }

  export type RelanceConfigUncheckedCreateInput = {
    id?: string
    messageTemplate: string
    lienPaiementDefaut?: string
    numeroWhatsAppRelance?: string | null
    updatedAt?: Date | string
  }

  export type RelanceConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageTemplate?: StringFieldUpdateOperationsInput | string
    lienPaiementDefaut?: StringFieldUpdateOperationsInput | string
    numeroWhatsAppRelance?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelanceConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageTemplate?: StringFieldUpdateOperationsInput | string
    lienPaiementDefaut?: StringFieldUpdateOperationsInput | string
    numeroWhatsAppRelance?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelanceConfigCreateManyInput = {
    id?: string
    messageTemplate: string
    lienPaiementDefaut?: string
    numeroWhatsAppRelance?: string | null
    updatedAt?: Date | string
  }

  export type RelanceConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageTemplate?: StringFieldUpdateOperationsInput | string
    lienPaiementDefaut?: StringFieldUpdateOperationsInput | string
    numeroWhatsAppRelance?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelanceConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageTemplate?: StringFieldUpdateOperationsInput | string
    lienPaiementDefaut?: StringFieldUpdateOperationsInput | string
    numeroWhatsAppRelance?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
    roleLabel?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
    roleLabel?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
    roleLabel?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfilListRelationFilter = {
    every?: ProfilWhereInput
    some?: ProfilWhereInput
    none?: ProfilWhereInput
  }

  export type ProfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompteCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateOuverture?: SortOrder
    dateReabonnement?: SortOrder
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompteAvgOrderByAggregateInput = {
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
  }

  export type CompteMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateOuverture?: SortOrder
    dateReabonnement?: SortOrder
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompteMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateOuverture?: SortOrder
    dateReabonnement?: SortOrder
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompteSumOrderByAggregateInput = {
    coutRechargeMensuel?: SortOrder
    capacitePlaces?: SortOrder
    maxProfils?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CompteScalarRelationFilter = {
    is?: CompteWhereInput
    isNot?: CompteWhereInput
  }

  export type AbonnementListRelationFilter = {
    every?: AbonnementWhereInput
    some?: AbonnementWhereInput
    none?: AbonnementWhereInput
  }

  export type AbonnementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    codePin?: SortOrder
    statut?: SortOrder
    compteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    codePin?: SortOrder
    statut?: SortOrder
    compteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    codePin?: SortOrder
    statut?: SortOrder
    compteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    ancienId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    ancienId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    ancienId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ProfilScalarRelationFilter = {
    is?: ProfilWhereInput
    isNot?: ProfilWhereInput
  }

  export type AbonnementCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    profilId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    tarif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbonnementAvgOrderByAggregateInput = {
    tarif?: SortOrder
  }

  export type AbonnementMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    profilId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    tarif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbonnementMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    profilId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    tarif?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbonnementSumOrderByAggregateInput = {
    tarif?: SortOrder
  }

  export type MouvementCaisseCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    beneficiaire?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementCaisseAvgOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type MouvementCaisseMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    beneficiaire?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementCaisseMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    beneficiaire?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementCaisseSumOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type CaissePointageCountOrderByAggregateInput = {
    id?: SortOrder
    dernierPointageReel?: SortOrder
    dateDernierPointage?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaissePointageAvgOrderByAggregateInput = {
    dernierPointageReel?: SortOrder
  }

  export type CaissePointageMaxOrderByAggregateInput = {
    id?: SortOrder
    dernierPointageReel?: SortOrder
    dateDernierPointage?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaissePointageMinOrderByAggregateInput = {
    id?: SortOrder
    dernierPointageReel?: SortOrder
    dateDernierPointage?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaissePointageSumOrderByAggregateInput = {
    dernierPointageReel?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    detail?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    detail?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    detail?: SortOrder
  }

  export type RelanceConfigCountOrderByAggregateInput = {
    id?: SortOrder
    messageTemplate?: SortOrder
    lienPaiementDefaut?: SortOrder
    numeroWhatsAppRelance?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelanceConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    messageTemplate?: SortOrder
    lienPaiementDefaut?: SortOrder
    numeroWhatsAppRelance?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelanceConfigMinOrderByAggregateInput = {
    id?: SortOrder
    messageTemplate?: SortOrder
    lienPaiementDefaut?: SortOrder
    numeroWhatsAppRelance?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfilCreateNestedManyWithoutCompteInput = {
    create?: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput> | ProfilCreateWithoutCompteInput[] | ProfilUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutCompteInput | ProfilCreateOrConnectWithoutCompteInput[]
    createMany?: ProfilCreateManyCompteInputEnvelope
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
  }

  export type ProfilUncheckedCreateNestedManyWithoutCompteInput = {
    create?: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput> | ProfilCreateWithoutCompteInput[] | ProfilUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutCompteInput | ProfilCreateOrConnectWithoutCompteInput[]
    createMany?: ProfilCreateManyCompteInputEnvelope
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfilUpdateManyWithoutCompteNestedInput = {
    create?: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput> | ProfilCreateWithoutCompteInput[] | ProfilUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutCompteInput | ProfilCreateOrConnectWithoutCompteInput[]
    upsert?: ProfilUpsertWithWhereUniqueWithoutCompteInput | ProfilUpsertWithWhereUniqueWithoutCompteInput[]
    createMany?: ProfilCreateManyCompteInputEnvelope
    set?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    disconnect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    delete?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    update?: ProfilUpdateWithWhereUniqueWithoutCompteInput | ProfilUpdateWithWhereUniqueWithoutCompteInput[]
    updateMany?: ProfilUpdateManyWithWhereWithoutCompteInput | ProfilUpdateManyWithWhereWithoutCompteInput[]
    deleteMany?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
  }

  export type ProfilUncheckedUpdateManyWithoutCompteNestedInput = {
    create?: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput> | ProfilCreateWithoutCompteInput[] | ProfilUncheckedCreateWithoutCompteInput[]
    connectOrCreate?: ProfilCreateOrConnectWithoutCompteInput | ProfilCreateOrConnectWithoutCompteInput[]
    upsert?: ProfilUpsertWithWhereUniqueWithoutCompteInput | ProfilUpsertWithWhereUniqueWithoutCompteInput[]
    createMany?: ProfilCreateManyCompteInputEnvelope
    set?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    disconnect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    delete?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    connect?: ProfilWhereUniqueInput | ProfilWhereUniqueInput[]
    update?: ProfilUpdateWithWhereUniqueWithoutCompteInput | ProfilUpdateWithWhereUniqueWithoutCompteInput[]
    updateMany?: ProfilUpdateManyWithWhereWithoutCompteInput | ProfilUpdateManyWithWhereWithoutCompteInput[]
    deleteMany?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
  }

  export type CompteCreateNestedOneWithoutProfilsInput = {
    create?: XOR<CompteCreateWithoutProfilsInput, CompteUncheckedCreateWithoutProfilsInput>
    connectOrCreate?: CompteCreateOrConnectWithoutProfilsInput
    connect?: CompteWhereUniqueInput
  }

  export type AbonnementCreateNestedManyWithoutProfilInput = {
    create?: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput> | AbonnementCreateWithoutProfilInput[] | AbonnementUncheckedCreateWithoutProfilInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutProfilInput | AbonnementCreateOrConnectWithoutProfilInput[]
    createMany?: AbonnementCreateManyProfilInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type AbonnementUncheckedCreateNestedManyWithoutProfilInput = {
    create?: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput> | AbonnementCreateWithoutProfilInput[] | AbonnementUncheckedCreateWithoutProfilInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutProfilInput | AbonnementCreateOrConnectWithoutProfilInput[]
    createMany?: AbonnementCreateManyProfilInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type CompteUpdateOneRequiredWithoutProfilsNestedInput = {
    create?: XOR<CompteCreateWithoutProfilsInput, CompteUncheckedCreateWithoutProfilsInput>
    connectOrCreate?: CompteCreateOrConnectWithoutProfilsInput
    upsert?: CompteUpsertWithoutProfilsInput
    connect?: CompteWhereUniqueInput
    update?: XOR<XOR<CompteUpdateToOneWithWhereWithoutProfilsInput, CompteUpdateWithoutProfilsInput>, CompteUncheckedUpdateWithoutProfilsInput>
  }

  export type AbonnementUpdateManyWithoutProfilNestedInput = {
    create?: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput> | AbonnementCreateWithoutProfilInput[] | AbonnementUncheckedCreateWithoutProfilInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutProfilInput | AbonnementCreateOrConnectWithoutProfilInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutProfilInput | AbonnementUpsertWithWhereUniqueWithoutProfilInput[]
    createMany?: AbonnementCreateManyProfilInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutProfilInput | AbonnementUpdateWithWhereUniqueWithoutProfilInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutProfilInput | AbonnementUpdateManyWithWhereWithoutProfilInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type AbonnementUncheckedUpdateManyWithoutProfilNestedInput = {
    create?: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput> | AbonnementCreateWithoutProfilInput[] | AbonnementUncheckedCreateWithoutProfilInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutProfilInput | AbonnementCreateOrConnectWithoutProfilInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutProfilInput | AbonnementUpsertWithWhereUniqueWithoutProfilInput[]
    createMany?: AbonnementCreateManyProfilInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutProfilInput | AbonnementUpdateWithWhereUniqueWithoutProfilInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutProfilInput | AbonnementUpdateManyWithWhereWithoutProfilInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type AbonnementCreateNestedManyWithoutClientInput = {
    create?: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput> | AbonnementCreateWithoutClientInput[] | AbonnementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutClientInput | AbonnementCreateOrConnectWithoutClientInput[]
    createMany?: AbonnementCreateManyClientInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type AbonnementUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput> | AbonnementCreateWithoutClientInput[] | AbonnementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutClientInput | AbonnementCreateOrConnectWithoutClientInput[]
    createMany?: AbonnementCreateManyClientInputEnvelope
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
  }

  export type AbonnementUpdateManyWithoutClientNestedInput = {
    create?: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput> | AbonnementCreateWithoutClientInput[] | AbonnementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutClientInput | AbonnementCreateOrConnectWithoutClientInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutClientInput | AbonnementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AbonnementCreateManyClientInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutClientInput | AbonnementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutClientInput | AbonnementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type AbonnementUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput> | AbonnementCreateWithoutClientInput[] | AbonnementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AbonnementCreateOrConnectWithoutClientInput | AbonnementCreateOrConnectWithoutClientInput[]
    upsert?: AbonnementUpsertWithWhereUniqueWithoutClientInput | AbonnementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AbonnementCreateManyClientInputEnvelope
    set?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    disconnect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    delete?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    connect?: AbonnementWhereUniqueInput | AbonnementWhereUniqueInput[]
    update?: AbonnementUpdateWithWhereUniqueWithoutClientInput | AbonnementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AbonnementUpdateManyWithWhereWithoutClientInput | AbonnementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAbonnementsInput = {
    create?: XOR<ClientCreateWithoutAbonnementsInput, ClientUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAbonnementsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProfilCreateNestedOneWithoutAbonnementsInput = {
    create?: XOR<ProfilCreateWithoutAbonnementsInput, ProfilUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutAbonnementsInput
    connect?: ProfilWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAbonnementsNestedInput = {
    create?: XOR<ClientCreateWithoutAbonnementsInput, ClientUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAbonnementsInput
    upsert?: ClientUpsertWithoutAbonnementsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAbonnementsInput, ClientUpdateWithoutAbonnementsInput>, ClientUncheckedUpdateWithoutAbonnementsInput>
  }

  export type ProfilUpdateOneRequiredWithoutAbonnementsNestedInput = {
    create?: XOR<ProfilCreateWithoutAbonnementsInput, ProfilUncheckedCreateWithoutAbonnementsInput>
    connectOrCreate?: ProfilCreateOrConnectWithoutAbonnementsInput
    upsert?: ProfilUpsertWithoutAbonnementsInput
    connect?: ProfilWhereUniqueInput
    update?: XOR<XOR<ProfilUpdateToOneWithWhereWithoutAbonnementsInput, ProfilUpdateWithoutAbonnementsInput>, ProfilUncheckedUpdateWithoutAbonnementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfilCreateWithoutCompteInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementCreateNestedManyWithoutProfilInput
  }

  export type ProfilUncheckedCreateWithoutCompteInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    abonnements?: AbonnementUncheckedCreateNestedManyWithoutProfilInput
  }

  export type ProfilCreateOrConnectWithoutCompteInput = {
    where: ProfilWhereUniqueInput
    create: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput>
  }

  export type ProfilCreateManyCompteInputEnvelope = {
    data: ProfilCreateManyCompteInput | ProfilCreateManyCompteInput[]
  }

  export type ProfilUpsertWithWhereUniqueWithoutCompteInput = {
    where: ProfilWhereUniqueInput
    update: XOR<ProfilUpdateWithoutCompteInput, ProfilUncheckedUpdateWithoutCompteInput>
    create: XOR<ProfilCreateWithoutCompteInput, ProfilUncheckedCreateWithoutCompteInput>
  }

  export type ProfilUpdateWithWhereUniqueWithoutCompteInput = {
    where: ProfilWhereUniqueInput
    data: XOR<ProfilUpdateWithoutCompteInput, ProfilUncheckedUpdateWithoutCompteInput>
  }

  export type ProfilUpdateManyWithWhereWithoutCompteInput = {
    where: ProfilScalarWhereInput
    data: XOR<ProfilUpdateManyMutationInput, ProfilUncheckedUpdateManyWithoutCompteInput>
  }

  export type ProfilScalarWhereInput = {
    AND?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
    OR?: ProfilScalarWhereInput[]
    NOT?: ProfilScalarWhereInput | ProfilScalarWhereInput[]
    id?: StringFilter<"Profil"> | string
    nom?: StringFilter<"Profil"> | string
    codePin?: StringFilter<"Profil"> | string
    statut?: StringFilter<"Profil"> | string
    compteId?: StringFilter<"Profil"> | string
    createdAt?: DateTimeFilter<"Profil"> | Date | string
    updatedAt?: DateTimeFilter<"Profil"> | Date | string
  }

  export type CompteCreateWithoutProfilsInput = {
    id?: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel?: number
    capacitePlaces?: number
    maxProfils?: number
    statut?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompteUncheckedCreateWithoutProfilsInput = {
    id?: string
    libelle: string
    email: string
    motDePasse: string
    dateOuverture: string
    dateReabonnement: string
    coutRechargeMensuel?: number
    capacitePlaces?: number
    maxProfils?: number
    statut?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompteCreateOrConnectWithoutProfilsInput = {
    where: CompteWhereUniqueInput
    create: XOR<CompteCreateWithoutProfilsInput, CompteUncheckedCreateWithoutProfilsInput>
  }

  export type AbonnementCreateWithoutProfilInput = {
    id?: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAbonnementsInput
  }

  export type AbonnementUncheckedCreateWithoutProfilInput = {
    id?: string
    clientId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementCreateOrConnectWithoutProfilInput = {
    where: AbonnementWhereUniqueInput
    create: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput>
  }

  export type AbonnementCreateManyProfilInputEnvelope = {
    data: AbonnementCreateManyProfilInput | AbonnementCreateManyProfilInput[]
  }

  export type CompteUpsertWithoutProfilsInput = {
    update: XOR<CompteUpdateWithoutProfilsInput, CompteUncheckedUpdateWithoutProfilsInput>
    create: XOR<CompteCreateWithoutProfilsInput, CompteUncheckedCreateWithoutProfilsInput>
    where?: CompteWhereInput
  }

  export type CompteUpdateToOneWithWhereWithoutProfilsInput = {
    where?: CompteWhereInput
    data: XOR<CompteUpdateWithoutProfilsInput, CompteUncheckedUpdateWithoutProfilsInput>
  }

  export type CompteUpdateWithoutProfilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompteUncheckedUpdateWithoutProfilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateOuverture?: StringFieldUpdateOperationsInput | string
    dateReabonnement?: StringFieldUpdateOperationsInput | string
    coutRechargeMensuel?: IntFieldUpdateOperationsInput | number
    capacitePlaces?: IntFieldUpdateOperationsInput | number
    maxProfils?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUpsertWithWhereUniqueWithoutProfilInput = {
    where: AbonnementWhereUniqueInput
    update: XOR<AbonnementUpdateWithoutProfilInput, AbonnementUncheckedUpdateWithoutProfilInput>
    create: XOR<AbonnementCreateWithoutProfilInput, AbonnementUncheckedCreateWithoutProfilInput>
  }

  export type AbonnementUpdateWithWhereUniqueWithoutProfilInput = {
    where: AbonnementWhereUniqueInput
    data: XOR<AbonnementUpdateWithoutProfilInput, AbonnementUncheckedUpdateWithoutProfilInput>
  }

  export type AbonnementUpdateManyWithWhereWithoutProfilInput = {
    where: AbonnementScalarWhereInput
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyWithoutProfilInput>
  }

  export type AbonnementScalarWhereInput = {
    AND?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
    OR?: AbonnementScalarWhereInput[]
    NOT?: AbonnementScalarWhereInput | AbonnementScalarWhereInput[]
    id?: StringFilter<"Abonnement"> | string
    clientId?: StringFilter<"Abonnement"> | string
    profilId?: StringFilter<"Abonnement"> | string
    dateDebut?: StringFilter<"Abonnement"> | string
    dateFin?: StringFilter<"Abonnement"> | string
    tarif?: IntFilter<"Abonnement"> | number
    statut?: StringFilter<"Abonnement"> | string
    createdAt?: DateTimeFilter<"Abonnement"> | Date | string
    updatedAt?: DateTimeFilter<"Abonnement"> | Date | string
  }

  export type AbonnementCreateWithoutClientInput = {
    id?: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profil: ProfilCreateNestedOneWithoutAbonnementsInput
  }

  export type AbonnementUncheckedCreateWithoutClientInput = {
    id?: string
    profilId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementCreateOrConnectWithoutClientInput = {
    where: AbonnementWhereUniqueInput
    create: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput>
  }

  export type AbonnementCreateManyClientInputEnvelope = {
    data: AbonnementCreateManyClientInput | AbonnementCreateManyClientInput[]
  }

  export type AbonnementUpsertWithWhereUniqueWithoutClientInput = {
    where: AbonnementWhereUniqueInput
    update: XOR<AbonnementUpdateWithoutClientInput, AbonnementUncheckedUpdateWithoutClientInput>
    create: XOR<AbonnementCreateWithoutClientInput, AbonnementUncheckedCreateWithoutClientInput>
  }

  export type AbonnementUpdateWithWhereUniqueWithoutClientInput = {
    where: AbonnementWhereUniqueInput
    data: XOR<AbonnementUpdateWithoutClientInput, AbonnementUncheckedUpdateWithoutClientInput>
  }

  export type AbonnementUpdateManyWithWhereWithoutClientInput = {
    where: AbonnementScalarWhereInput
    data: XOR<AbonnementUpdateManyMutationInput, AbonnementUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutAbonnementsInput = {
    id?: string
    nom: string
    telephone: string
    ancienId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutAbonnementsInput = {
    id?: string
    nom: string
    telephone: string
    ancienId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutAbonnementsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAbonnementsInput, ClientUncheckedCreateWithoutAbonnementsInput>
  }

  export type ProfilCreateWithoutAbonnementsInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    compte: CompteCreateNestedOneWithoutProfilsInput
  }

  export type ProfilUncheckedCreateWithoutAbonnementsInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    compteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilCreateOrConnectWithoutAbonnementsInput = {
    where: ProfilWhereUniqueInput
    create: XOR<ProfilCreateWithoutAbonnementsInput, ProfilUncheckedCreateWithoutAbonnementsInput>
  }

  export type ClientUpsertWithoutAbonnementsInput = {
    update: XOR<ClientUpdateWithoutAbonnementsInput, ClientUncheckedUpdateWithoutAbonnementsInput>
    create: XOR<ClientCreateWithoutAbonnementsInput, ClientUncheckedCreateWithoutAbonnementsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAbonnementsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAbonnementsInput, ClientUncheckedUpdateWithoutAbonnementsInput>
  }

  export type ClientUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    ancienId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilUpsertWithoutAbonnementsInput = {
    update: XOR<ProfilUpdateWithoutAbonnementsInput, ProfilUncheckedUpdateWithoutAbonnementsInput>
    create: XOR<ProfilCreateWithoutAbonnementsInput, ProfilUncheckedCreateWithoutAbonnementsInput>
    where?: ProfilWhereInput
  }

  export type ProfilUpdateToOneWithWhereWithoutAbonnementsInput = {
    where?: ProfilWhereInput
    data: XOR<ProfilUpdateWithoutAbonnementsInput, ProfilUncheckedUpdateWithoutAbonnementsInput>
  }

  export type ProfilUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compte?: CompteUpdateOneRequiredWithoutProfilsNestedInput
  }

  export type ProfilUncheckedUpdateWithoutAbonnementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilCreateManyCompteInput = {
    id?: string
    nom: string
    codePin?: string
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilUpdateWithoutCompteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUpdateManyWithoutProfilNestedInput
  }

  export type ProfilUncheckedUpdateWithoutCompteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abonnements?: AbonnementUncheckedUpdateManyWithoutProfilNestedInput
  }

  export type ProfilUncheckedUpdateManyWithoutCompteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    codePin?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateManyProfilInput = {
    id?: string
    clientId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUpdateWithoutProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAbonnementsNestedInput
  }

  export type AbonnementUncheckedUpdateWithoutProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUncheckedUpdateManyWithoutProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementCreateManyClientInput = {
    id?: string
    profilId: string
    dateDebut: string
    dateFin: string
    tarif?: number
    statut?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbonnementUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: ProfilUpdateOneRequiredWithoutAbonnementsNestedInput
  }

  export type AbonnementUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbonnementUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilId?: StringFieldUpdateOperationsInput | string
    dateDebut?: StringFieldUpdateOperationsInput | string
    dateFin?: StringFieldUpdateOperationsInput | string
    tarif?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}