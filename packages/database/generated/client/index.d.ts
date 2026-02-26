
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
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model CultureArticle
 * 
 */
export type CultureArticle = $Result.DefaultSelection<Prisma.$CultureArticlePayload>
/**
 * Model CultureArticleTranslation
 * 
 */
export type CultureArticleTranslation = $Result.DefaultSelection<Prisma.$CultureArticleTranslationPayload>
/**
 * Model CultureTag
 * 
 */
export type CultureTag = $Result.DefaultSelection<Prisma.$CultureTagPayload>
/**
 * Model CultureTagOnArticle
 * 
 */
export type CultureTagOnArticle = $Result.DefaultSelection<Prisma.$CultureTagOnArticlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Language: {
  en: 'en',
  ru: 'ru'
};

export type Language = (typeof Language)[keyof typeof Language]


export const CultureSection: {
  STORIES: 'STORIES',
  ATHLETES: 'ATHLETES',
  COMPETITIONS: 'COMPETITIONS',
  TRAINING: 'TRAINING',
  RELAX: 'RELAX',
  SAFETY: 'SAFETY'
};

export type CultureSection = (typeof CultureSection)[keyof typeof CultureSection]

}

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type CultureSection = $Enums.CultureSection

export const CultureSection: typeof $Enums.CultureSection

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cultureArticle`: Exposes CRUD operations for the **CultureArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CultureArticles
    * const cultureArticles = await prisma.cultureArticle.findMany()
    * ```
    */
  get cultureArticle(): Prisma.CultureArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cultureArticleTranslation`: Exposes CRUD operations for the **CultureArticleTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CultureArticleTranslations
    * const cultureArticleTranslations = await prisma.cultureArticleTranslation.findMany()
    * ```
    */
  get cultureArticleTranslation(): Prisma.CultureArticleTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cultureTag`: Exposes CRUD operations for the **CultureTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CultureTags
    * const cultureTags = await prisma.cultureTag.findMany()
    * ```
    */
  get cultureTag(): Prisma.CultureTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cultureTagOnArticle`: Exposes CRUD operations for the **CultureTagOnArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CultureTagOnArticles
    * const cultureTagOnArticles = await prisma.cultureTagOnArticle.findMany()
    * ```
    */
  get cultureTagOnArticle(): Prisma.CultureTagOnArticleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
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
    RefreshToken: 'RefreshToken',
    CultureArticle: 'CultureArticle',
    CultureArticleTranslation: 'CultureArticleTranslation',
    CultureTag: 'CultureTag',
    CultureTagOnArticle: 'CultureTagOnArticle'
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
      modelProps: "user" | "refreshToken" | "cultureArticle" | "cultureArticleTranslation" | "cultureTag" | "cultureTagOnArticle"
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
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      CultureArticle: {
        payload: Prisma.$CultureArticlePayload<ExtArgs>
        fields: Prisma.CultureArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CultureArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CultureArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          findFirst: {
            args: Prisma.CultureArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CultureArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          findMany: {
            args: Prisma.CultureArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>[]
          }
          create: {
            args: Prisma.CultureArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          createMany: {
            args: Prisma.CultureArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CultureArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>[]
          }
          delete: {
            args: Prisma.CultureArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          update: {
            args: Prisma.CultureArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          deleteMany: {
            args: Prisma.CultureArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CultureArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CultureArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>[]
          }
          upsert: {
            args: Prisma.CultureArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticlePayload>
          }
          aggregate: {
            args: Prisma.CultureArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultureArticle>
          }
          groupBy: {
            args: Prisma.CultureArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CultureArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CultureArticleCountArgs<ExtArgs>
            result: $Utils.Optional<CultureArticleCountAggregateOutputType> | number
          }
        }
      }
      CultureArticleTranslation: {
        payload: Prisma.$CultureArticleTranslationPayload<ExtArgs>
        fields: Prisma.CultureArticleTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CultureArticleTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CultureArticleTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          findFirst: {
            args: Prisma.CultureArticleTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CultureArticleTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          findMany: {
            args: Prisma.CultureArticleTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>[]
          }
          create: {
            args: Prisma.CultureArticleTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          createMany: {
            args: Prisma.CultureArticleTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CultureArticleTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>[]
          }
          delete: {
            args: Prisma.CultureArticleTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          update: {
            args: Prisma.CultureArticleTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          deleteMany: {
            args: Prisma.CultureArticleTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CultureArticleTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CultureArticleTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>[]
          }
          upsert: {
            args: Prisma.CultureArticleTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureArticleTranslationPayload>
          }
          aggregate: {
            args: Prisma.CultureArticleTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultureArticleTranslation>
          }
          groupBy: {
            args: Prisma.CultureArticleTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CultureArticleTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CultureArticleTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<CultureArticleTranslationCountAggregateOutputType> | number
          }
        }
      }
      CultureTag: {
        payload: Prisma.$CultureTagPayload<ExtArgs>
        fields: Prisma.CultureTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CultureTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CultureTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          findFirst: {
            args: Prisma.CultureTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CultureTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          findMany: {
            args: Prisma.CultureTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>[]
          }
          create: {
            args: Prisma.CultureTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          createMany: {
            args: Prisma.CultureTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CultureTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>[]
          }
          delete: {
            args: Prisma.CultureTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          update: {
            args: Prisma.CultureTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          deleteMany: {
            args: Prisma.CultureTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CultureTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CultureTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>[]
          }
          upsert: {
            args: Prisma.CultureTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagPayload>
          }
          aggregate: {
            args: Prisma.CultureTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultureTag>
          }
          groupBy: {
            args: Prisma.CultureTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CultureTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CultureTagCountArgs<ExtArgs>
            result: $Utils.Optional<CultureTagCountAggregateOutputType> | number
          }
        }
      }
      CultureTagOnArticle: {
        payload: Prisma.$CultureTagOnArticlePayload<ExtArgs>
        fields: Prisma.CultureTagOnArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CultureTagOnArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CultureTagOnArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          findFirst: {
            args: Prisma.CultureTagOnArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CultureTagOnArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          findMany: {
            args: Prisma.CultureTagOnArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>[]
          }
          create: {
            args: Prisma.CultureTagOnArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          createMany: {
            args: Prisma.CultureTagOnArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CultureTagOnArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>[]
          }
          delete: {
            args: Prisma.CultureTagOnArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          update: {
            args: Prisma.CultureTagOnArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          deleteMany: {
            args: Prisma.CultureTagOnArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CultureTagOnArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CultureTagOnArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>[]
          }
          upsert: {
            args: Prisma.CultureTagOnArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultureTagOnArticlePayload>
          }
          aggregate: {
            args: Prisma.CultureTagOnArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultureTagOnArticle>
          }
          groupBy: {
            args: Prisma.CultureTagOnArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CultureTagOnArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CultureTagOnArticleCountArgs<ExtArgs>
            result: $Utils.Optional<CultureTagOnArticleCountAggregateOutputType> | number
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
    refreshToken?: RefreshTokenOmit
    cultureArticle?: CultureArticleOmit
    cultureArticleTranslation?: CultureArticleTranslationOmit
    cultureTag?: CultureTagOmit
    cultureTagOnArticle?: CultureTagOnArticleOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type CultureArticleCountOutputType
   */

  export type CultureArticleCountOutputType = {
    translations: number
    tags: number
  }

  export type CultureArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | CultureArticleCountOutputTypeCountTranslationsArgs
    tags?: boolean | CultureArticleCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * CultureArticleCountOutputType without action
   */
  export type CultureArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleCountOutputType
     */
    select?: CultureArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CultureArticleCountOutputType without action
   */
  export type CultureArticleCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureArticleTranslationWhereInput
  }

  /**
   * CultureArticleCountOutputType without action
   */
  export type CultureArticleCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureTagOnArticleWhereInput
  }


  /**
   * Count Type CultureTagCountOutputType
   */

  export type CultureTagCountOutputType = {
    articles: number
  }

  export type CultureTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | CultureTagCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * CultureTagCountOutputType without action
   */
  export type CultureTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagCountOutputType
     */
    select?: CultureTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CultureTagCountOutputType without action
   */
  export type CultureTagCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureTagOnArticleWhereInput
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
    appleSub: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    appleSub: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    appleSub: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    appleSub?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    appleSub?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    appleSub?: true
    email?: true
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
    appleSub: string
    email: string | null
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
    appleSub?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appleSub?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appleSub?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    appleSub?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appleSub" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appleSub: string
      email: string | null
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
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly appleSub: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    deviceId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    deviceId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    deviceId: number
    expiresAt: number
    createdAt: number
    revokedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceId?: true
    expiresAt?: true
    createdAt?: true
    revokedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    deviceId: string | null
    expiresAt: Date
    createdAt: Date
    revokedAt: Date | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revokedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "deviceId" | "expiresAt" | "createdAt" | "revokedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      deviceId: string | null
      expiresAt: Date
      createdAt: Date
      revokedAt: Date | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly deviceId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model CultureArticle
   */

  export type AggregateCultureArticle = {
    _count: CultureArticleCountAggregateOutputType | null
    _avg: CultureArticleAvgAggregateOutputType | null
    _sum: CultureArticleSumAggregateOutputType | null
    _min: CultureArticleMinAggregateOutputType | null
    _max: CultureArticleMaxAggregateOutputType | null
  }

  export type CultureArticleAvgAggregateOutputType = {
    readTimeMinutes: number | null
  }

  export type CultureArticleSumAggregateOutputType = {
    readTimeMinutes: number | null
  }

  export type CultureArticleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    section: $Enums.CultureSection | null
    coverImageUrl: string | null
    readTimeMinutes: number | null
    publishedAt: Date | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultureArticleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    section: $Enums.CultureSection | null
    coverImageUrl: string | null
    readTimeMinutes: number | null
    publishedAt: Date | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultureArticleCountAggregateOutputType = {
    id: number
    slug: number
    section: number
    coverImageUrl: number
    readTimeMinutes: number
    publishedAt: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CultureArticleAvgAggregateInputType = {
    readTimeMinutes?: true
  }

  export type CultureArticleSumAggregateInputType = {
    readTimeMinutes?: true
  }

  export type CultureArticleMinAggregateInputType = {
    id?: true
    slug?: true
    section?: true
    coverImageUrl?: true
    readTimeMinutes?: true
    publishedAt?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultureArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    section?: true
    coverImageUrl?: true
    readTimeMinutes?: true
    publishedAt?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultureArticleCountAggregateInputType = {
    id?: true
    slug?: true
    section?: true
    coverImageUrl?: true
    readTimeMinutes?: true
    publishedAt?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CultureArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureArticle to aggregate.
     */
    where?: CultureArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticles to fetch.
     */
    orderBy?: CultureArticleOrderByWithRelationInput | CultureArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CultureArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CultureArticles
    **/
    _count?: true | CultureArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CultureArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CultureArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CultureArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CultureArticleMaxAggregateInputType
  }

  export type GetCultureArticleAggregateType<T extends CultureArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateCultureArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultureArticle[P]>
      : GetScalarType<T[P], AggregateCultureArticle[P]>
  }




  export type CultureArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureArticleWhereInput
    orderBy?: CultureArticleOrderByWithAggregationInput | CultureArticleOrderByWithAggregationInput[]
    by: CultureArticleScalarFieldEnum[] | CultureArticleScalarFieldEnum
    having?: CultureArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CultureArticleCountAggregateInputType | true
    _avg?: CultureArticleAvgAggregateInputType
    _sum?: CultureArticleSumAggregateInputType
    _min?: CultureArticleMinAggregateInputType
    _max?: CultureArticleMaxAggregateInputType
  }

  export type CultureArticleGroupByOutputType = {
    id: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl: string | null
    readTimeMinutes: number | null
    publishedAt: Date | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: CultureArticleCountAggregateOutputType | null
    _avg: CultureArticleAvgAggregateOutputType | null
    _sum: CultureArticleSumAggregateOutputType | null
    _min: CultureArticleMinAggregateOutputType | null
    _max: CultureArticleMaxAggregateOutputType | null
  }

  type GetCultureArticleGroupByPayload<T extends CultureArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CultureArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CultureArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CultureArticleGroupByOutputType[P]>
            : GetScalarType<T[P], CultureArticleGroupByOutputType[P]>
        }
      >
    >


  export type CultureArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    section?: boolean
    coverImageUrl?: boolean
    readTimeMinutes?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translations?: boolean | CultureArticle$translationsArgs<ExtArgs>
    tags?: boolean | CultureArticle$tagsArgs<ExtArgs>
    _count?: boolean | CultureArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureArticle"]>

  export type CultureArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    section?: boolean
    coverImageUrl?: boolean
    readTimeMinutes?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cultureArticle"]>

  export type CultureArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    section?: boolean
    coverImageUrl?: boolean
    readTimeMinutes?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cultureArticle"]>

  export type CultureArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    section?: boolean
    coverImageUrl?: boolean
    readTimeMinutes?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CultureArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "section" | "coverImageUrl" | "readTimeMinutes" | "publishedAt" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["cultureArticle"]>
  export type CultureArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | CultureArticle$translationsArgs<ExtArgs>
    tags?: boolean | CultureArticle$tagsArgs<ExtArgs>
    _count?: boolean | CultureArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CultureArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CultureArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CultureArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CultureArticle"
    objects: {
      translations: Prisma.$CultureArticleTranslationPayload<ExtArgs>[]
      tags: Prisma.$CultureTagOnArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      section: $Enums.CultureSection
      coverImageUrl: string | null
      readTimeMinutes: number | null
      publishedAt: Date | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cultureArticle"]>
    composites: {}
  }

  type CultureArticleGetPayload<S extends boolean | null | undefined | CultureArticleDefaultArgs> = $Result.GetResult<Prisma.$CultureArticlePayload, S>

  type CultureArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CultureArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CultureArticleCountAggregateInputType | true
    }

  export interface CultureArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CultureArticle'], meta: { name: 'CultureArticle' } }
    /**
     * Find zero or one CultureArticle that matches the filter.
     * @param {CultureArticleFindUniqueArgs} args - Arguments to find a CultureArticle
     * @example
     * // Get one CultureArticle
     * const cultureArticle = await prisma.cultureArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultureArticleFindUniqueArgs>(args: SelectSubset<T, CultureArticleFindUniqueArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CultureArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultureArticleFindUniqueOrThrowArgs} args - Arguments to find a CultureArticle
     * @example
     * // Get one CultureArticle
     * const cultureArticle = await prisma.cultureArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultureArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, CultureArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleFindFirstArgs} args - Arguments to find a CultureArticle
     * @example
     * // Get one CultureArticle
     * const cultureArticle = await prisma.cultureArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultureArticleFindFirstArgs>(args?: SelectSubset<T, CultureArticleFindFirstArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleFindFirstOrThrowArgs} args - Arguments to find a CultureArticle
     * @example
     * // Get one CultureArticle
     * const cultureArticle = await prisma.cultureArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultureArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, CultureArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CultureArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CultureArticles
     * const cultureArticles = await prisma.cultureArticle.findMany()
     * 
     * // Get first 10 CultureArticles
     * const cultureArticles = await prisma.cultureArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cultureArticleWithIdOnly = await prisma.cultureArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CultureArticleFindManyArgs>(args?: SelectSubset<T, CultureArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CultureArticle.
     * @param {CultureArticleCreateArgs} args - Arguments to create a CultureArticle.
     * @example
     * // Create one CultureArticle
     * const CultureArticle = await prisma.cultureArticle.create({
     *   data: {
     *     // ... data to create a CultureArticle
     *   }
     * })
     * 
     */
    create<T extends CultureArticleCreateArgs>(args: SelectSubset<T, CultureArticleCreateArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CultureArticles.
     * @param {CultureArticleCreateManyArgs} args - Arguments to create many CultureArticles.
     * @example
     * // Create many CultureArticles
     * const cultureArticle = await prisma.cultureArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CultureArticleCreateManyArgs>(args?: SelectSubset<T, CultureArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CultureArticles and returns the data saved in the database.
     * @param {CultureArticleCreateManyAndReturnArgs} args - Arguments to create many CultureArticles.
     * @example
     * // Create many CultureArticles
     * const cultureArticle = await prisma.cultureArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CultureArticles and only return the `id`
     * const cultureArticleWithIdOnly = await prisma.cultureArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CultureArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, CultureArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CultureArticle.
     * @param {CultureArticleDeleteArgs} args - Arguments to delete one CultureArticle.
     * @example
     * // Delete one CultureArticle
     * const CultureArticle = await prisma.cultureArticle.delete({
     *   where: {
     *     // ... filter to delete one CultureArticle
     *   }
     * })
     * 
     */
    delete<T extends CultureArticleDeleteArgs>(args: SelectSubset<T, CultureArticleDeleteArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CultureArticle.
     * @param {CultureArticleUpdateArgs} args - Arguments to update one CultureArticle.
     * @example
     * // Update one CultureArticle
     * const cultureArticle = await prisma.cultureArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CultureArticleUpdateArgs>(args: SelectSubset<T, CultureArticleUpdateArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CultureArticles.
     * @param {CultureArticleDeleteManyArgs} args - Arguments to filter CultureArticles to delete.
     * @example
     * // Delete a few CultureArticles
     * const { count } = await prisma.cultureArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CultureArticleDeleteManyArgs>(args?: SelectSubset<T, CultureArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CultureArticles
     * const cultureArticle = await prisma.cultureArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CultureArticleUpdateManyArgs>(args: SelectSubset<T, CultureArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureArticles and returns the data updated in the database.
     * @param {CultureArticleUpdateManyAndReturnArgs} args - Arguments to update many CultureArticles.
     * @example
     * // Update many CultureArticles
     * const cultureArticle = await prisma.cultureArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CultureArticles and only return the `id`
     * const cultureArticleWithIdOnly = await prisma.cultureArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends CultureArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, CultureArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CultureArticle.
     * @param {CultureArticleUpsertArgs} args - Arguments to update or create a CultureArticle.
     * @example
     * // Update or create a CultureArticle
     * const cultureArticle = await prisma.cultureArticle.upsert({
     *   create: {
     *     // ... data to create a CultureArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CultureArticle we want to update
     *   }
     * })
     */
    upsert<T extends CultureArticleUpsertArgs>(args: SelectSubset<T, CultureArticleUpsertArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CultureArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleCountArgs} args - Arguments to filter CultureArticles to count.
     * @example
     * // Count the number of CultureArticles
     * const count = await prisma.cultureArticle.count({
     *   where: {
     *     // ... the filter for the CultureArticles we want to count
     *   }
     * })
    **/
    count<T extends CultureArticleCountArgs>(
      args?: Subset<T, CultureArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CultureArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CultureArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CultureArticleAggregateArgs>(args: Subset<T, CultureArticleAggregateArgs>): Prisma.PrismaPromise<GetCultureArticleAggregateType<T>>

    /**
     * Group by CultureArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleGroupByArgs} args - Group by arguments.
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
      T extends CultureArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CultureArticleGroupByArgs['orderBy'] }
        : { orderBy?: CultureArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CultureArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultureArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CultureArticle model
   */
  readonly fields: CultureArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CultureArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CultureArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translations<T extends CultureArticle$translationsArgs<ExtArgs> = {}>(args?: Subset<T, CultureArticle$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends CultureArticle$tagsArgs<ExtArgs> = {}>(args?: Subset<T, CultureArticle$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CultureArticle model
   */
  interface CultureArticleFieldRefs {
    readonly id: FieldRef<"CultureArticle", 'String'>
    readonly slug: FieldRef<"CultureArticle", 'String'>
    readonly section: FieldRef<"CultureArticle", 'CultureSection'>
    readonly coverImageUrl: FieldRef<"CultureArticle", 'String'>
    readonly readTimeMinutes: FieldRef<"CultureArticle", 'Int'>
    readonly publishedAt: FieldRef<"CultureArticle", 'DateTime'>
    readonly isPublished: FieldRef<"CultureArticle", 'Boolean'>
    readonly createdAt: FieldRef<"CultureArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"CultureArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CultureArticle findUnique
   */
  export type CultureArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticle to fetch.
     */
    where: CultureArticleWhereUniqueInput
  }

  /**
   * CultureArticle findUniqueOrThrow
   */
  export type CultureArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticle to fetch.
     */
    where: CultureArticleWhereUniqueInput
  }

  /**
   * CultureArticle findFirst
   */
  export type CultureArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticle to fetch.
     */
    where?: CultureArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticles to fetch.
     */
    orderBy?: CultureArticleOrderByWithRelationInput | CultureArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureArticles.
     */
    cursor?: CultureArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureArticles.
     */
    distinct?: CultureArticleScalarFieldEnum | CultureArticleScalarFieldEnum[]
  }

  /**
   * CultureArticle findFirstOrThrow
   */
  export type CultureArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticle to fetch.
     */
    where?: CultureArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticles to fetch.
     */
    orderBy?: CultureArticleOrderByWithRelationInput | CultureArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureArticles.
     */
    cursor?: CultureArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureArticles.
     */
    distinct?: CultureArticleScalarFieldEnum | CultureArticleScalarFieldEnum[]
  }

  /**
   * CultureArticle findMany
   */
  export type CultureArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticles to fetch.
     */
    where?: CultureArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticles to fetch.
     */
    orderBy?: CultureArticleOrderByWithRelationInput | CultureArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CultureArticles.
     */
    cursor?: CultureArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticles.
     */
    skip?: number
    distinct?: CultureArticleScalarFieldEnum | CultureArticleScalarFieldEnum[]
  }

  /**
   * CultureArticle create
   */
  export type CultureArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a CultureArticle.
     */
    data: XOR<CultureArticleCreateInput, CultureArticleUncheckedCreateInput>
  }

  /**
   * CultureArticle createMany
   */
  export type CultureArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CultureArticles.
     */
    data: CultureArticleCreateManyInput | CultureArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureArticle createManyAndReturn
   */
  export type CultureArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * The data used to create many CultureArticles.
     */
    data: CultureArticleCreateManyInput | CultureArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureArticle update
   */
  export type CultureArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a CultureArticle.
     */
    data: XOR<CultureArticleUpdateInput, CultureArticleUncheckedUpdateInput>
    /**
     * Choose, which CultureArticle to update.
     */
    where: CultureArticleWhereUniqueInput
  }

  /**
   * CultureArticle updateMany
   */
  export type CultureArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CultureArticles.
     */
    data: XOR<CultureArticleUpdateManyMutationInput, CultureArticleUncheckedUpdateManyInput>
    /**
     * Filter which CultureArticles to update
     */
    where?: CultureArticleWhereInput
    /**
     * Limit how many CultureArticles to update.
     */
    limit?: number
  }

  /**
   * CultureArticle updateManyAndReturn
   */
  export type CultureArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * The data used to update CultureArticles.
     */
    data: XOR<CultureArticleUpdateManyMutationInput, CultureArticleUncheckedUpdateManyInput>
    /**
     * Filter which CultureArticles to update
     */
    where?: CultureArticleWhereInput
    /**
     * Limit how many CultureArticles to update.
     */
    limit?: number
  }

  /**
   * CultureArticle upsert
   */
  export type CultureArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the CultureArticle to update in case it exists.
     */
    where: CultureArticleWhereUniqueInput
    /**
     * In case the CultureArticle found by the `where` argument doesn't exist, create a new CultureArticle with this data.
     */
    create: XOR<CultureArticleCreateInput, CultureArticleUncheckedCreateInput>
    /**
     * In case the CultureArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CultureArticleUpdateInput, CultureArticleUncheckedUpdateInput>
  }

  /**
   * CultureArticle delete
   */
  export type CultureArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
    /**
     * Filter which CultureArticle to delete.
     */
    where: CultureArticleWhereUniqueInput
  }

  /**
   * CultureArticle deleteMany
   */
  export type CultureArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureArticles to delete
     */
    where?: CultureArticleWhereInput
    /**
     * Limit how many CultureArticles to delete.
     */
    limit?: number
  }

  /**
   * CultureArticle.translations
   */
  export type CultureArticle$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    where?: CultureArticleTranslationWhereInput
    orderBy?: CultureArticleTranslationOrderByWithRelationInput | CultureArticleTranslationOrderByWithRelationInput[]
    cursor?: CultureArticleTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CultureArticleTranslationScalarFieldEnum | CultureArticleTranslationScalarFieldEnum[]
  }

  /**
   * CultureArticle.tags
   */
  export type CultureArticle$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    where?: CultureTagOnArticleWhereInput
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    cursor?: CultureTagOnArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CultureTagOnArticleScalarFieldEnum | CultureTagOnArticleScalarFieldEnum[]
  }

  /**
   * CultureArticle without action
   */
  export type CultureArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticle
     */
    select?: CultureArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticle
     */
    omit?: CultureArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleInclude<ExtArgs> | null
  }


  /**
   * Model CultureArticleTranslation
   */

  export type AggregateCultureArticleTranslation = {
    _count: CultureArticleTranslationCountAggregateOutputType | null
    _min: CultureArticleTranslationMinAggregateOutputType | null
    _max: CultureArticleTranslationMaxAggregateOutputType | null
  }

  export type CultureArticleTranslationMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    lang: $Enums.Language | null
    title: string | null
    subtitle: string | null
    description: string | null
    contentMarkdown: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultureArticleTranslationMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    lang: $Enums.Language | null
    title: string | null
    subtitle: string | null
    description: string | null
    contentMarkdown: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultureArticleTranslationCountAggregateOutputType = {
    id: number
    articleId: number
    lang: number
    title: number
    subtitle: number
    description: number
    contentMarkdown: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CultureArticleTranslationMinAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    subtitle?: true
    description?: true
    contentMarkdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultureArticleTranslationMaxAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    subtitle?: true
    description?: true
    contentMarkdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultureArticleTranslationCountAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    subtitle?: true
    description?: true
    contentMarkdown?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CultureArticleTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureArticleTranslation to aggregate.
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticleTranslations to fetch.
     */
    orderBy?: CultureArticleTranslationOrderByWithRelationInput | CultureArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CultureArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CultureArticleTranslations
    **/
    _count?: true | CultureArticleTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CultureArticleTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CultureArticleTranslationMaxAggregateInputType
  }

  export type GetCultureArticleTranslationAggregateType<T extends CultureArticleTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateCultureArticleTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultureArticleTranslation[P]>
      : GetScalarType<T[P], AggregateCultureArticleTranslation[P]>
  }




  export type CultureArticleTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureArticleTranslationWhereInput
    orderBy?: CultureArticleTranslationOrderByWithAggregationInput | CultureArticleTranslationOrderByWithAggregationInput[]
    by: CultureArticleTranslationScalarFieldEnum[] | CultureArticleTranslationScalarFieldEnum
    having?: CultureArticleTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CultureArticleTranslationCountAggregateInputType | true
    _min?: CultureArticleTranslationMinAggregateInputType
    _max?: CultureArticleTranslationMaxAggregateInputType
  }

  export type CultureArticleTranslationGroupByOutputType = {
    id: string
    articleId: string
    lang: $Enums.Language
    title: string
    subtitle: string | null
    description: string | null
    contentMarkdown: string
    createdAt: Date
    updatedAt: Date
    _count: CultureArticleTranslationCountAggregateOutputType | null
    _min: CultureArticleTranslationMinAggregateOutputType | null
    _max: CultureArticleTranslationMaxAggregateOutputType | null
  }

  type GetCultureArticleTranslationGroupByPayload<T extends CultureArticleTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CultureArticleTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CultureArticleTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CultureArticleTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], CultureArticleTranslationGroupByOutputType[P]>
        }
      >
    >


  export type CultureArticleTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    contentMarkdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureArticleTranslation"]>

  export type CultureArticleTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    contentMarkdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureArticleTranslation"]>

  export type CultureArticleTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    contentMarkdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureArticleTranslation"]>

  export type CultureArticleTranslationSelectScalar = {
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    contentMarkdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CultureArticleTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "lang" | "title" | "subtitle" | "description" | "contentMarkdown" | "createdAt" | "updatedAt", ExtArgs["result"]["cultureArticleTranslation"]>
  export type CultureArticleTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }
  export type CultureArticleTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }
  export type CultureArticleTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
  }

  export type $CultureArticleTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CultureArticleTranslation"
    objects: {
      article: Prisma.$CultureArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      lang: $Enums.Language
      title: string
      subtitle: string | null
      description: string | null
      contentMarkdown: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cultureArticleTranslation"]>
    composites: {}
  }

  type CultureArticleTranslationGetPayload<S extends boolean | null | undefined | CultureArticleTranslationDefaultArgs> = $Result.GetResult<Prisma.$CultureArticleTranslationPayload, S>

  type CultureArticleTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CultureArticleTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CultureArticleTranslationCountAggregateInputType | true
    }

  export interface CultureArticleTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CultureArticleTranslation'], meta: { name: 'CultureArticleTranslation' } }
    /**
     * Find zero or one CultureArticleTranslation that matches the filter.
     * @param {CultureArticleTranslationFindUniqueArgs} args - Arguments to find a CultureArticleTranslation
     * @example
     * // Get one CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultureArticleTranslationFindUniqueArgs>(args: SelectSubset<T, CultureArticleTranslationFindUniqueArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CultureArticleTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultureArticleTranslationFindUniqueOrThrowArgs} args - Arguments to find a CultureArticleTranslation
     * @example
     * // Get one CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultureArticleTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, CultureArticleTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureArticleTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationFindFirstArgs} args - Arguments to find a CultureArticleTranslation
     * @example
     * // Get one CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultureArticleTranslationFindFirstArgs>(args?: SelectSubset<T, CultureArticleTranslationFindFirstArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureArticleTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationFindFirstOrThrowArgs} args - Arguments to find a CultureArticleTranslation
     * @example
     * // Get one CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultureArticleTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, CultureArticleTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CultureArticleTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CultureArticleTranslations
     * const cultureArticleTranslations = await prisma.cultureArticleTranslation.findMany()
     * 
     * // Get first 10 CultureArticleTranslations
     * const cultureArticleTranslations = await prisma.cultureArticleTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cultureArticleTranslationWithIdOnly = await prisma.cultureArticleTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CultureArticleTranslationFindManyArgs>(args?: SelectSubset<T, CultureArticleTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CultureArticleTranslation.
     * @param {CultureArticleTranslationCreateArgs} args - Arguments to create a CultureArticleTranslation.
     * @example
     * // Create one CultureArticleTranslation
     * const CultureArticleTranslation = await prisma.cultureArticleTranslation.create({
     *   data: {
     *     // ... data to create a CultureArticleTranslation
     *   }
     * })
     * 
     */
    create<T extends CultureArticleTranslationCreateArgs>(args: SelectSubset<T, CultureArticleTranslationCreateArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CultureArticleTranslations.
     * @param {CultureArticleTranslationCreateManyArgs} args - Arguments to create many CultureArticleTranslations.
     * @example
     * // Create many CultureArticleTranslations
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CultureArticleTranslationCreateManyArgs>(args?: SelectSubset<T, CultureArticleTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CultureArticleTranslations and returns the data saved in the database.
     * @param {CultureArticleTranslationCreateManyAndReturnArgs} args - Arguments to create many CultureArticleTranslations.
     * @example
     * // Create many CultureArticleTranslations
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CultureArticleTranslations and only return the `id`
     * const cultureArticleTranslationWithIdOnly = await prisma.cultureArticleTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CultureArticleTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, CultureArticleTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CultureArticleTranslation.
     * @param {CultureArticleTranslationDeleteArgs} args - Arguments to delete one CultureArticleTranslation.
     * @example
     * // Delete one CultureArticleTranslation
     * const CultureArticleTranslation = await prisma.cultureArticleTranslation.delete({
     *   where: {
     *     // ... filter to delete one CultureArticleTranslation
     *   }
     * })
     * 
     */
    delete<T extends CultureArticleTranslationDeleteArgs>(args: SelectSubset<T, CultureArticleTranslationDeleteArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CultureArticleTranslation.
     * @param {CultureArticleTranslationUpdateArgs} args - Arguments to update one CultureArticleTranslation.
     * @example
     * // Update one CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CultureArticleTranslationUpdateArgs>(args: SelectSubset<T, CultureArticleTranslationUpdateArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CultureArticleTranslations.
     * @param {CultureArticleTranslationDeleteManyArgs} args - Arguments to filter CultureArticleTranslations to delete.
     * @example
     * // Delete a few CultureArticleTranslations
     * const { count } = await prisma.cultureArticleTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CultureArticleTranslationDeleteManyArgs>(args?: SelectSubset<T, CultureArticleTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureArticleTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CultureArticleTranslations
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CultureArticleTranslationUpdateManyArgs>(args: SelectSubset<T, CultureArticleTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureArticleTranslations and returns the data updated in the database.
     * @param {CultureArticleTranslationUpdateManyAndReturnArgs} args - Arguments to update many CultureArticleTranslations.
     * @example
     * // Update many CultureArticleTranslations
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CultureArticleTranslations and only return the `id`
     * const cultureArticleTranslationWithIdOnly = await prisma.cultureArticleTranslation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CultureArticleTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, CultureArticleTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CultureArticleTranslation.
     * @param {CultureArticleTranslationUpsertArgs} args - Arguments to update or create a CultureArticleTranslation.
     * @example
     * // Update or create a CultureArticleTranslation
     * const cultureArticleTranslation = await prisma.cultureArticleTranslation.upsert({
     *   create: {
     *     // ... data to create a CultureArticleTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CultureArticleTranslation we want to update
     *   }
     * })
     */
    upsert<T extends CultureArticleTranslationUpsertArgs>(args: SelectSubset<T, CultureArticleTranslationUpsertArgs<ExtArgs>>): Prisma__CultureArticleTranslationClient<$Result.GetResult<Prisma.$CultureArticleTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CultureArticleTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationCountArgs} args - Arguments to filter CultureArticleTranslations to count.
     * @example
     * // Count the number of CultureArticleTranslations
     * const count = await prisma.cultureArticleTranslation.count({
     *   where: {
     *     // ... the filter for the CultureArticleTranslations we want to count
     *   }
     * })
    **/
    count<T extends CultureArticleTranslationCountArgs>(
      args?: Subset<T, CultureArticleTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CultureArticleTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CultureArticleTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CultureArticleTranslationAggregateArgs>(args: Subset<T, CultureArticleTranslationAggregateArgs>): Prisma.PrismaPromise<GetCultureArticleTranslationAggregateType<T>>

    /**
     * Group by CultureArticleTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureArticleTranslationGroupByArgs} args - Group by arguments.
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
      T extends CultureArticleTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CultureArticleTranslationGroupByArgs['orderBy'] }
        : { orderBy?: CultureArticleTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CultureArticleTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultureArticleTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CultureArticleTranslation model
   */
  readonly fields: CultureArticleTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CultureArticleTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CultureArticleTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends CultureArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CultureArticleDefaultArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CultureArticleTranslation model
   */
  interface CultureArticleTranslationFieldRefs {
    readonly id: FieldRef<"CultureArticleTranslation", 'String'>
    readonly articleId: FieldRef<"CultureArticleTranslation", 'String'>
    readonly lang: FieldRef<"CultureArticleTranslation", 'Language'>
    readonly title: FieldRef<"CultureArticleTranslation", 'String'>
    readonly subtitle: FieldRef<"CultureArticleTranslation", 'String'>
    readonly description: FieldRef<"CultureArticleTranslation", 'String'>
    readonly contentMarkdown: FieldRef<"CultureArticleTranslation", 'String'>
    readonly createdAt: FieldRef<"CultureArticleTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"CultureArticleTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CultureArticleTranslation findUnique
   */
  export type CultureArticleTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticleTranslation to fetch.
     */
    where: CultureArticleTranslationWhereUniqueInput
  }

  /**
   * CultureArticleTranslation findUniqueOrThrow
   */
  export type CultureArticleTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticleTranslation to fetch.
     */
    where: CultureArticleTranslationWhereUniqueInput
  }

  /**
   * CultureArticleTranslation findFirst
   */
  export type CultureArticleTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticleTranslation to fetch.
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticleTranslations to fetch.
     */
    orderBy?: CultureArticleTranslationOrderByWithRelationInput | CultureArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureArticleTranslations.
     */
    cursor?: CultureArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureArticleTranslations.
     */
    distinct?: CultureArticleTranslationScalarFieldEnum | CultureArticleTranslationScalarFieldEnum[]
  }

  /**
   * CultureArticleTranslation findFirstOrThrow
   */
  export type CultureArticleTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticleTranslation to fetch.
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticleTranslations to fetch.
     */
    orderBy?: CultureArticleTranslationOrderByWithRelationInput | CultureArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureArticleTranslations.
     */
    cursor?: CultureArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureArticleTranslations.
     */
    distinct?: CultureArticleTranslationScalarFieldEnum | CultureArticleTranslationScalarFieldEnum[]
  }

  /**
   * CultureArticleTranslation findMany
   */
  export type CultureArticleTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which CultureArticleTranslations to fetch.
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureArticleTranslations to fetch.
     */
    orderBy?: CultureArticleTranslationOrderByWithRelationInput | CultureArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CultureArticleTranslations.
     */
    cursor?: CultureArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureArticleTranslations.
     */
    skip?: number
    distinct?: CultureArticleTranslationScalarFieldEnum | CultureArticleTranslationScalarFieldEnum[]
  }

  /**
   * CultureArticleTranslation create
   */
  export type CultureArticleTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a CultureArticleTranslation.
     */
    data: XOR<CultureArticleTranslationCreateInput, CultureArticleTranslationUncheckedCreateInput>
  }

  /**
   * CultureArticleTranslation createMany
   */
  export type CultureArticleTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CultureArticleTranslations.
     */
    data: CultureArticleTranslationCreateManyInput | CultureArticleTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureArticleTranslation createManyAndReturn
   */
  export type CultureArticleTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many CultureArticleTranslations.
     */
    data: CultureArticleTranslationCreateManyInput | CultureArticleTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultureArticleTranslation update
   */
  export type CultureArticleTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a CultureArticleTranslation.
     */
    data: XOR<CultureArticleTranslationUpdateInput, CultureArticleTranslationUncheckedUpdateInput>
    /**
     * Choose, which CultureArticleTranslation to update.
     */
    where: CultureArticleTranslationWhereUniqueInput
  }

  /**
   * CultureArticleTranslation updateMany
   */
  export type CultureArticleTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CultureArticleTranslations.
     */
    data: XOR<CultureArticleTranslationUpdateManyMutationInput, CultureArticleTranslationUncheckedUpdateManyInput>
    /**
     * Filter which CultureArticleTranslations to update
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * Limit how many CultureArticleTranslations to update.
     */
    limit?: number
  }

  /**
   * CultureArticleTranslation updateManyAndReturn
   */
  export type CultureArticleTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * The data used to update CultureArticleTranslations.
     */
    data: XOR<CultureArticleTranslationUpdateManyMutationInput, CultureArticleTranslationUncheckedUpdateManyInput>
    /**
     * Filter which CultureArticleTranslations to update
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * Limit how many CultureArticleTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultureArticleTranslation upsert
   */
  export type CultureArticleTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the CultureArticleTranslation to update in case it exists.
     */
    where: CultureArticleTranslationWhereUniqueInput
    /**
     * In case the CultureArticleTranslation found by the `where` argument doesn't exist, create a new CultureArticleTranslation with this data.
     */
    create: XOR<CultureArticleTranslationCreateInput, CultureArticleTranslationUncheckedCreateInput>
    /**
     * In case the CultureArticleTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CultureArticleTranslationUpdateInput, CultureArticleTranslationUncheckedUpdateInput>
  }

  /**
   * CultureArticleTranslation delete
   */
  export type CultureArticleTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter which CultureArticleTranslation to delete.
     */
    where: CultureArticleTranslationWhereUniqueInput
  }

  /**
   * CultureArticleTranslation deleteMany
   */
  export type CultureArticleTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureArticleTranslations to delete
     */
    where?: CultureArticleTranslationWhereInput
    /**
     * Limit how many CultureArticleTranslations to delete.
     */
    limit?: number
  }

  /**
   * CultureArticleTranslation without action
   */
  export type CultureArticleTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureArticleTranslation
     */
    select?: CultureArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureArticleTranslation
     */
    omit?: CultureArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureArticleTranslationInclude<ExtArgs> | null
  }


  /**
   * Model CultureTag
   */

  export type AggregateCultureTag = {
    _count: CultureTagCountAggregateOutputType | null
    _min: CultureTagMinAggregateOutputType | null
    _max: CultureTagMaxAggregateOutputType | null
  }

  export type CultureTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CultureTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CultureTagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CultureTagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CultureTagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CultureTagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CultureTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureTag to aggregate.
     */
    where?: CultureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTags to fetch.
     */
    orderBy?: CultureTagOrderByWithRelationInput | CultureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CultureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CultureTags
    **/
    _count?: true | CultureTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CultureTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CultureTagMaxAggregateInputType
  }

  export type GetCultureTagAggregateType<T extends CultureTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCultureTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultureTag[P]>
      : GetScalarType<T[P], AggregateCultureTag[P]>
  }




  export type CultureTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureTagWhereInput
    orderBy?: CultureTagOrderByWithAggregationInput | CultureTagOrderByWithAggregationInput[]
    by: CultureTagScalarFieldEnum[] | CultureTagScalarFieldEnum
    having?: CultureTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CultureTagCountAggregateInputType | true
    _min?: CultureTagMinAggregateInputType
    _max?: CultureTagMaxAggregateInputType
  }

  export type CultureTagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CultureTagCountAggregateOutputType | null
    _min: CultureTagMinAggregateOutputType | null
    _max: CultureTagMaxAggregateOutputType | null
  }

  type GetCultureTagGroupByPayload<T extends CultureTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CultureTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CultureTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CultureTagGroupByOutputType[P]>
            : GetScalarType<T[P], CultureTagGroupByOutputType[P]>
        }
      >
    >


  export type CultureTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    articles?: boolean | CultureTag$articlesArgs<ExtArgs>
    _count?: boolean | CultureTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureTag"]>

  export type CultureTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cultureTag"]>

  export type CultureTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cultureTag"]>

  export type CultureTagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CultureTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["cultureTag"]>
  export type CultureTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | CultureTag$articlesArgs<ExtArgs>
    _count?: boolean | CultureTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CultureTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CultureTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CultureTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CultureTag"
    objects: {
      articles: Prisma.$CultureTagOnArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["cultureTag"]>
    composites: {}
  }

  type CultureTagGetPayload<S extends boolean | null | undefined | CultureTagDefaultArgs> = $Result.GetResult<Prisma.$CultureTagPayload, S>

  type CultureTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CultureTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CultureTagCountAggregateInputType | true
    }

  export interface CultureTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CultureTag'], meta: { name: 'CultureTag' } }
    /**
     * Find zero or one CultureTag that matches the filter.
     * @param {CultureTagFindUniqueArgs} args - Arguments to find a CultureTag
     * @example
     * // Get one CultureTag
     * const cultureTag = await prisma.cultureTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultureTagFindUniqueArgs>(args: SelectSubset<T, CultureTagFindUniqueArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CultureTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultureTagFindUniqueOrThrowArgs} args - Arguments to find a CultureTag
     * @example
     * // Get one CultureTag
     * const cultureTag = await prisma.cultureTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultureTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CultureTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagFindFirstArgs} args - Arguments to find a CultureTag
     * @example
     * // Get one CultureTag
     * const cultureTag = await prisma.cultureTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultureTagFindFirstArgs>(args?: SelectSubset<T, CultureTagFindFirstArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagFindFirstOrThrowArgs} args - Arguments to find a CultureTag
     * @example
     * // Get one CultureTag
     * const cultureTag = await prisma.cultureTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultureTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CultureTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CultureTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CultureTags
     * const cultureTags = await prisma.cultureTag.findMany()
     * 
     * // Get first 10 CultureTags
     * const cultureTags = await prisma.cultureTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cultureTagWithIdOnly = await prisma.cultureTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CultureTagFindManyArgs>(args?: SelectSubset<T, CultureTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CultureTag.
     * @param {CultureTagCreateArgs} args - Arguments to create a CultureTag.
     * @example
     * // Create one CultureTag
     * const CultureTag = await prisma.cultureTag.create({
     *   data: {
     *     // ... data to create a CultureTag
     *   }
     * })
     * 
     */
    create<T extends CultureTagCreateArgs>(args: SelectSubset<T, CultureTagCreateArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CultureTags.
     * @param {CultureTagCreateManyArgs} args - Arguments to create many CultureTags.
     * @example
     * // Create many CultureTags
     * const cultureTag = await prisma.cultureTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CultureTagCreateManyArgs>(args?: SelectSubset<T, CultureTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CultureTags and returns the data saved in the database.
     * @param {CultureTagCreateManyAndReturnArgs} args - Arguments to create many CultureTags.
     * @example
     * // Create many CultureTags
     * const cultureTag = await prisma.cultureTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CultureTags and only return the `id`
     * const cultureTagWithIdOnly = await prisma.cultureTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CultureTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CultureTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CultureTag.
     * @param {CultureTagDeleteArgs} args - Arguments to delete one CultureTag.
     * @example
     * // Delete one CultureTag
     * const CultureTag = await prisma.cultureTag.delete({
     *   where: {
     *     // ... filter to delete one CultureTag
     *   }
     * })
     * 
     */
    delete<T extends CultureTagDeleteArgs>(args: SelectSubset<T, CultureTagDeleteArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CultureTag.
     * @param {CultureTagUpdateArgs} args - Arguments to update one CultureTag.
     * @example
     * // Update one CultureTag
     * const cultureTag = await prisma.cultureTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CultureTagUpdateArgs>(args: SelectSubset<T, CultureTagUpdateArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CultureTags.
     * @param {CultureTagDeleteManyArgs} args - Arguments to filter CultureTags to delete.
     * @example
     * // Delete a few CultureTags
     * const { count } = await prisma.cultureTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CultureTagDeleteManyArgs>(args?: SelectSubset<T, CultureTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CultureTags
     * const cultureTag = await prisma.cultureTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CultureTagUpdateManyArgs>(args: SelectSubset<T, CultureTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureTags and returns the data updated in the database.
     * @param {CultureTagUpdateManyAndReturnArgs} args - Arguments to update many CultureTags.
     * @example
     * // Update many CultureTags
     * const cultureTag = await prisma.cultureTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CultureTags and only return the `id`
     * const cultureTagWithIdOnly = await prisma.cultureTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends CultureTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CultureTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CultureTag.
     * @param {CultureTagUpsertArgs} args - Arguments to update or create a CultureTag.
     * @example
     * // Update or create a CultureTag
     * const cultureTag = await prisma.cultureTag.upsert({
     *   create: {
     *     // ... data to create a CultureTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CultureTag we want to update
     *   }
     * })
     */
    upsert<T extends CultureTagUpsertArgs>(args: SelectSubset<T, CultureTagUpsertArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CultureTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagCountArgs} args - Arguments to filter CultureTags to count.
     * @example
     * // Count the number of CultureTags
     * const count = await prisma.cultureTag.count({
     *   where: {
     *     // ... the filter for the CultureTags we want to count
     *   }
     * })
    **/
    count<T extends CultureTagCountArgs>(
      args?: Subset<T, CultureTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CultureTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CultureTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CultureTagAggregateArgs>(args: Subset<T, CultureTagAggregateArgs>): Prisma.PrismaPromise<GetCultureTagAggregateType<T>>

    /**
     * Group by CultureTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagGroupByArgs} args - Group by arguments.
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
      T extends CultureTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CultureTagGroupByArgs['orderBy'] }
        : { orderBy?: CultureTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CultureTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultureTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CultureTag model
   */
  readonly fields: CultureTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CultureTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CultureTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends CultureTag$articlesArgs<ExtArgs> = {}>(args?: Subset<T, CultureTag$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CultureTag model
   */
  interface CultureTagFieldRefs {
    readonly id: FieldRef<"CultureTag", 'String'>
    readonly name: FieldRef<"CultureTag", 'String'>
    readonly createdAt: FieldRef<"CultureTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CultureTag findUnique
   */
  export type CultureTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter, which CultureTag to fetch.
     */
    where: CultureTagWhereUniqueInput
  }

  /**
   * CultureTag findUniqueOrThrow
   */
  export type CultureTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter, which CultureTag to fetch.
     */
    where: CultureTagWhereUniqueInput
  }

  /**
   * CultureTag findFirst
   */
  export type CultureTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter, which CultureTag to fetch.
     */
    where?: CultureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTags to fetch.
     */
    orderBy?: CultureTagOrderByWithRelationInput | CultureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureTags.
     */
    cursor?: CultureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureTags.
     */
    distinct?: CultureTagScalarFieldEnum | CultureTagScalarFieldEnum[]
  }

  /**
   * CultureTag findFirstOrThrow
   */
  export type CultureTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter, which CultureTag to fetch.
     */
    where?: CultureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTags to fetch.
     */
    orderBy?: CultureTagOrderByWithRelationInput | CultureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureTags.
     */
    cursor?: CultureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureTags.
     */
    distinct?: CultureTagScalarFieldEnum | CultureTagScalarFieldEnum[]
  }

  /**
   * CultureTag findMany
   */
  export type CultureTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter, which CultureTags to fetch.
     */
    where?: CultureTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTags to fetch.
     */
    orderBy?: CultureTagOrderByWithRelationInput | CultureTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CultureTags.
     */
    cursor?: CultureTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTags.
     */
    skip?: number
    distinct?: CultureTagScalarFieldEnum | CultureTagScalarFieldEnum[]
  }

  /**
   * CultureTag create
   */
  export type CultureTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CultureTag.
     */
    data: XOR<CultureTagCreateInput, CultureTagUncheckedCreateInput>
  }

  /**
   * CultureTag createMany
   */
  export type CultureTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CultureTags.
     */
    data: CultureTagCreateManyInput | CultureTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureTag createManyAndReturn
   */
  export type CultureTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * The data used to create many CultureTags.
     */
    data: CultureTagCreateManyInput | CultureTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureTag update
   */
  export type CultureTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CultureTag.
     */
    data: XOR<CultureTagUpdateInput, CultureTagUncheckedUpdateInput>
    /**
     * Choose, which CultureTag to update.
     */
    where: CultureTagWhereUniqueInput
  }

  /**
   * CultureTag updateMany
   */
  export type CultureTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CultureTags.
     */
    data: XOR<CultureTagUpdateManyMutationInput, CultureTagUncheckedUpdateManyInput>
    /**
     * Filter which CultureTags to update
     */
    where?: CultureTagWhereInput
    /**
     * Limit how many CultureTags to update.
     */
    limit?: number
  }

  /**
   * CultureTag updateManyAndReturn
   */
  export type CultureTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * The data used to update CultureTags.
     */
    data: XOR<CultureTagUpdateManyMutationInput, CultureTagUncheckedUpdateManyInput>
    /**
     * Filter which CultureTags to update
     */
    where?: CultureTagWhereInput
    /**
     * Limit how many CultureTags to update.
     */
    limit?: number
  }

  /**
   * CultureTag upsert
   */
  export type CultureTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CultureTag to update in case it exists.
     */
    where: CultureTagWhereUniqueInput
    /**
     * In case the CultureTag found by the `where` argument doesn't exist, create a new CultureTag with this data.
     */
    create: XOR<CultureTagCreateInput, CultureTagUncheckedCreateInput>
    /**
     * In case the CultureTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CultureTagUpdateInput, CultureTagUncheckedUpdateInput>
  }

  /**
   * CultureTag delete
   */
  export type CultureTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
    /**
     * Filter which CultureTag to delete.
     */
    where: CultureTagWhereUniqueInput
  }

  /**
   * CultureTag deleteMany
   */
  export type CultureTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureTags to delete
     */
    where?: CultureTagWhereInput
    /**
     * Limit how many CultureTags to delete.
     */
    limit?: number
  }

  /**
   * CultureTag.articles
   */
  export type CultureTag$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    where?: CultureTagOnArticleWhereInput
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    cursor?: CultureTagOnArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CultureTagOnArticleScalarFieldEnum | CultureTagOnArticleScalarFieldEnum[]
  }

  /**
   * CultureTag without action
   */
  export type CultureTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTag
     */
    select?: CultureTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTag
     */
    omit?: CultureTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagInclude<ExtArgs> | null
  }


  /**
   * Model CultureTagOnArticle
   */

  export type AggregateCultureTagOnArticle = {
    _count: CultureTagOnArticleCountAggregateOutputType | null
    _min: CultureTagOnArticleMinAggregateOutputType | null
    _max: CultureTagOnArticleMaxAggregateOutputType | null
  }

  export type CultureTagOnArticleMinAggregateOutputType = {
    articleId: string | null
    tagId: string | null
  }

  export type CultureTagOnArticleMaxAggregateOutputType = {
    articleId: string | null
    tagId: string | null
  }

  export type CultureTagOnArticleCountAggregateOutputType = {
    articleId: number
    tagId: number
    _all: number
  }


  export type CultureTagOnArticleMinAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type CultureTagOnArticleMaxAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type CultureTagOnArticleCountAggregateInputType = {
    articleId?: true
    tagId?: true
    _all?: true
  }

  export type CultureTagOnArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureTagOnArticle to aggregate.
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTagOnArticles to fetch.
     */
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CultureTagOnArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTagOnArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTagOnArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CultureTagOnArticles
    **/
    _count?: true | CultureTagOnArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CultureTagOnArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CultureTagOnArticleMaxAggregateInputType
  }

  export type GetCultureTagOnArticleAggregateType<T extends CultureTagOnArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateCultureTagOnArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultureTagOnArticle[P]>
      : GetScalarType<T[P], AggregateCultureTagOnArticle[P]>
  }




  export type CultureTagOnArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultureTagOnArticleWhereInput
    orderBy?: CultureTagOnArticleOrderByWithAggregationInput | CultureTagOnArticleOrderByWithAggregationInput[]
    by: CultureTagOnArticleScalarFieldEnum[] | CultureTagOnArticleScalarFieldEnum
    having?: CultureTagOnArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CultureTagOnArticleCountAggregateInputType | true
    _min?: CultureTagOnArticleMinAggregateInputType
    _max?: CultureTagOnArticleMaxAggregateInputType
  }

  export type CultureTagOnArticleGroupByOutputType = {
    articleId: string
    tagId: string
    _count: CultureTagOnArticleCountAggregateOutputType | null
    _min: CultureTagOnArticleMinAggregateOutputType | null
    _max: CultureTagOnArticleMaxAggregateOutputType | null
  }

  type GetCultureTagOnArticleGroupByPayload<T extends CultureTagOnArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CultureTagOnArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CultureTagOnArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CultureTagOnArticleGroupByOutputType[P]>
            : GetScalarType<T[P], CultureTagOnArticleGroupByOutputType[P]>
        }
      >
    >


  export type CultureTagOnArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureTagOnArticle"]>

  export type CultureTagOnArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureTagOnArticle"]>

  export type CultureTagOnArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultureTagOnArticle"]>

  export type CultureTagOnArticleSelectScalar = {
    articleId?: boolean
    tagId?: boolean
  }

  export type CultureTagOnArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "tagId", ExtArgs["result"]["cultureTagOnArticle"]>
  export type CultureTagOnArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }
  export type CultureTagOnArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }
  export type CultureTagOnArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CultureArticleDefaultArgs<ExtArgs>
    tag?: boolean | CultureTagDefaultArgs<ExtArgs>
  }

  export type $CultureTagOnArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CultureTagOnArticle"
    objects: {
      article: Prisma.$CultureArticlePayload<ExtArgs>
      tag: Prisma.$CultureTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: string
      tagId: string
    }, ExtArgs["result"]["cultureTagOnArticle"]>
    composites: {}
  }

  type CultureTagOnArticleGetPayload<S extends boolean | null | undefined | CultureTagOnArticleDefaultArgs> = $Result.GetResult<Prisma.$CultureTagOnArticlePayload, S>

  type CultureTagOnArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CultureTagOnArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CultureTagOnArticleCountAggregateInputType | true
    }

  export interface CultureTagOnArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CultureTagOnArticle'], meta: { name: 'CultureTagOnArticle' } }
    /**
     * Find zero or one CultureTagOnArticle that matches the filter.
     * @param {CultureTagOnArticleFindUniqueArgs} args - Arguments to find a CultureTagOnArticle
     * @example
     * // Get one CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultureTagOnArticleFindUniqueArgs>(args: SelectSubset<T, CultureTagOnArticleFindUniqueArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CultureTagOnArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultureTagOnArticleFindUniqueOrThrowArgs} args - Arguments to find a CultureTagOnArticle
     * @example
     * // Get one CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultureTagOnArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, CultureTagOnArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureTagOnArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleFindFirstArgs} args - Arguments to find a CultureTagOnArticle
     * @example
     * // Get one CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultureTagOnArticleFindFirstArgs>(args?: SelectSubset<T, CultureTagOnArticleFindFirstArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultureTagOnArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleFindFirstOrThrowArgs} args - Arguments to find a CultureTagOnArticle
     * @example
     * // Get one CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultureTagOnArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, CultureTagOnArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CultureTagOnArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CultureTagOnArticles
     * const cultureTagOnArticles = await prisma.cultureTagOnArticle.findMany()
     * 
     * // Get first 10 CultureTagOnArticles
     * const cultureTagOnArticles = await prisma.cultureTagOnArticle.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const cultureTagOnArticleWithArticleIdOnly = await prisma.cultureTagOnArticle.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends CultureTagOnArticleFindManyArgs>(args?: SelectSubset<T, CultureTagOnArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CultureTagOnArticle.
     * @param {CultureTagOnArticleCreateArgs} args - Arguments to create a CultureTagOnArticle.
     * @example
     * // Create one CultureTagOnArticle
     * const CultureTagOnArticle = await prisma.cultureTagOnArticle.create({
     *   data: {
     *     // ... data to create a CultureTagOnArticle
     *   }
     * })
     * 
     */
    create<T extends CultureTagOnArticleCreateArgs>(args: SelectSubset<T, CultureTagOnArticleCreateArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CultureTagOnArticles.
     * @param {CultureTagOnArticleCreateManyArgs} args - Arguments to create many CultureTagOnArticles.
     * @example
     * // Create many CultureTagOnArticles
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CultureTagOnArticleCreateManyArgs>(args?: SelectSubset<T, CultureTagOnArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CultureTagOnArticles and returns the data saved in the database.
     * @param {CultureTagOnArticleCreateManyAndReturnArgs} args - Arguments to create many CultureTagOnArticles.
     * @example
     * // Create many CultureTagOnArticles
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CultureTagOnArticles and only return the `articleId`
     * const cultureTagOnArticleWithArticleIdOnly = await prisma.cultureTagOnArticle.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CultureTagOnArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, CultureTagOnArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CultureTagOnArticle.
     * @param {CultureTagOnArticleDeleteArgs} args - Arguments to delete one CultureTagOnArticle.
     * @example
     * // Delete one CultureTagOnArticle
     * const CultureTagOnArticle = await prisma.cultureTagOnArticle.delete({
     *   where: {
     *     // ... filter to delete one CultureTagOnArticle
     *   }
     * })
     * 
     */
    delete<T extends CultureTagOnArticleDeleteArgs>(args: SelectSubset<T, CultureTagOnArticleDeleteArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CultureTagOnArticle.
     * @param {CultureTagOnArticleUpdateArgs} args - Arguments to update one CultureTagOnArticle.
     * @example
     * // Update one CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CultureTagOnArticleUpdateArgs>(args: SelectSubset<T, CultureTagOnArticleUpdateArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CultureTagOnArticles.
     * @param {CultureTagOnArticleDeleteManyArgs} args - Arguments to filter CultureTagOnArticles to delete.
     * @example
     * // Delete a few CultureTagOnArticles
     * const { count } = await prisma.cultureTagOnArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CultureTagOnArticleDeleteManyArgs>(args?: SelectSubset<T, CultureTagOnArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureTagOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CultureTagOnArticles
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CultureTagOnArticleUpdateManyArgs>(args: SelectSubset<T, CultureTagOnArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultureTagOnArticles and returns the data updated in the database.
     * @param {CultureTagOnArticleUpdateManyAndReturnArgs} args - Arguments to update many CultureTagOnArticles.
     * @example
     * // Update many CultureTagOnArticles
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CultureTagOnArticles and only return the `articleId`
     * const cultureTagOnArticleWithArticleIdOnly = await prisma.cultureTagOnArticle.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends CultureTagOnArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, CultureTagOnArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CultureTagOnArticle.
     * @param {CultureTagOnArticleUpsertArgs} args - Arguments to update or create a CultureTagOnArticle.
     * @example
     * // Update or create a CultureTagOnArticle
     * const cultureTagOnArticle = await prisma.cultureTagOnArticle.upsert({
     *   create: {
     *     // ... data to create a CultureTagOnArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CultureTagOnArticle we want to update
     *   }
     * })
     */
    upsert<T extends CultureTagOnArticleUpsertArgs>(args: SelectSubset<T, CultureTagOnArticleUpsertArgs<ExtArgs>>): Prisma__CultureTagOnArticleClient<$Result.GetResult<Prisma.$CultureTagOnArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CultureTagOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleCountArgs} args - Arguments to filter CultureTagOnArticles to count.
     * @example
     * // Count the number of CultureTagOnArticles
     * const count = await prisma.cultureTagOnArticle.count({
     *   where: {
     *     // ... the filter for the CultureTagOnArticles we want to count
     *   }
     * })
    **/
    count<T extends CultureTagOnArticleCountArgs>(
      args?: Subset<T, CultureTagOnArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CultureTagOnArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CultureTagOnArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CultureTagOnArticleAggregateArgs>(args: Subset<T, CultureTagOnArticleAggregateArgs>): Prisma.PrismaPromise<GetCultureTagOnArticleAggregateType<T>>

    /**
     * Group by CultureTagOnArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultureTagOnArticleGroupByArgs} args - Group by arguments.
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
      T extends CultureTagOnArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CultureTagOnArticleGroupByArgs['orderBy'] }
        : { orderBy?: CultureTagOnArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CultureTagOnArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultureTagOnArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CultureTagOnArticle model
   */
  readonly fields: CultureTagOnArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CultureTagOnArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CultureTagOnArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends CultureArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CultureArticleDefaultArgs<ExtArgs>>): Prisma__CultureArticleClient<$Result.GetResult<Prisma.$CultureArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends CultureTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CultureTagDefaultArgs<ExtArgs>>): Prisma__CultureTagClient<$Result.GetResult<Prisma.$CultureTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CultureTagOnArticle model
   */
  interface CultureTagOnArticleFieldRefs {
    readonly articleId: FieldRef<"CultureTagOnArticle", 'String'>
    readonly tagId: FieldRef<"CultureTagOnArticle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CultureTagOnArticle findUnique
   */
  export type CultureTagOnArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureTagOnArticle to fetch.
     */
    where: CultureTagOnArticleWhereUniqueInput
  }

  /**
   * CultureTagOnArticle findUniqueOrThrow
   */
  export type CultureTagOnArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureTagOnArticle to fetch.
     */
    where: CultureTagOnArticleWhereUniqueInput
  }

  /**
   * CultureTagOnArticle findFirst
   */
  export type CultureTagOnArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureTagOnArticle to fetch.
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTagOnArticles to fetch.
     */
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureTagOnArticles.
     */
    cursor?: CultureTagOnArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTagOnArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTagOnArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureTagOnArticles.
     */
    distinct?: CultureTagOnArticleScalarFieldEnum | CultureTagOnArticleScalarFieldEnum[]
  }

  /**
   * CultureTagOnArticle findFirstOrThrow
   */
  export type CultureTagOnArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureTagOnArticle to fetch.
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTagOnArticles to fetch.
     */
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultureTagOnArticles.
     */
    cursor?: CultureTagOnArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTagOnArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTagOnArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultureTagOnArticles.
     */
    distinct?: CultureTagOnArticleScalarFieldEnum | CultureTagOnArticleScalarFieldEnum[]
  }

  /**
   * CultureTagOnArticle findMany
   */
  export type CultureTagOnArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter, which CultureTagOnArticles to fetch.
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultureTagOnArticles to fetch.
     */
    orderBy?: CultureTagOnArticleOrderByWithRelationInput | CultureTagOnArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CultureTagOnArticles.
     */
    cursor?: CultureTagOnArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultureTagOnArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultureTagOnArticles.
     */
    skip?: number
    distinct?: CultureTagOnArticleScalarFieldEnum | CultureTagOnArticleScalarFieldEnum[]
  }

  /**
   * CultureTagOnArticle create
   */
  export type CultureTagOnArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a CultureTagOnArticle.
     */
    data: XOR<CultureTagOnArticleCreateInput, CultureTagOnArticleUncheckedCreateInput>
  }

  /**
   * CultureTagOnArticle createMany
   */
  export type CultureTagOnArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CultureTagOnArticles.
     */
    data: CultureTagOnArticleCreateManyInput | CultureTagOnArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultureTagOnArticle createManyAndReturn
   */
  export type CultureTagOnArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * The data used to create many CultureTagOnArticles.
     */
    data: CultureTagOnArticleCreateManyInput | CultureTagOnArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultureTagOnArticle update
   */
  export type CultureTagOnArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a CultureTagOnArticle.
     */
    data: XOR<CultureTagOnArticleUpdateInput, CultureTagOnArticleUncheckedUpdateInput>
    /**
     * Choose, which CultureTagOnArticle to update.
     */
    where: CultureTagOnArticleWhereUniqueInput
  }

  /**
   * CultureTagOnArticle updateMany
   */
  export type CultureTagOnArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CultureTagOnArticles.
     */
    data: XOR<CultureTagOnArticleUpdateManyMutationInput, CultureTagOnArticleUncheckedUpdateManyInput>
    /**
     * Filter which CultureTagOnArticles to update
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * Limit how many CultureTagOnArticles to update.
     */
    limit?: number
  }

  /**
   * CultureTagOnArticle updateManyAndReturn
   */
  export type CultureTagOnArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * The data used to update CultureTagOnArticles.
     */
    data: XOR<CultureTagOnArticleUpdateManyMutationInput, CultureTagOnArticleUncheckedUpdateManyInput>
    /**
     * Filter which CultureTagOnArticles to update
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * Limit how many CultureTagOnArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultureTagOnArticle upsert
   */
  export type CultureTagOnArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the CultureTagOnArticle to update in case it exists.
     */
    where: CultureTagOnArticleWhereUniqueInput
    /**
     * In case the CultureTagOnArticle found by the `where` argument doesn't exist, create a new CultureTagOnArticle with this data.
     */
    create: XOR<CultureTagOnArticleCreateInput, CultureTagOnArticleUncheckedCreateInput>
    /**
     * In case the CultureTagOnArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CultureTagOnArticleUpdateInput, CultureTagOnArticleUncheckedUpdateInput>
  }

  /**
   * CultureTagOnArticle delete
   */
  export type CultureTagOnArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
    /**
     * Filter which CultureTagOnArticle to delete.
     */
    where: CultureTagOnArticleWhereUniqueInput
  }

  /**
   * CultureTagOnArticle deleteMany
   */
  export type CultureTagOnArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultureTagOnArticles to delete
     */
    where?: CultureTagOnArticleWhereInput
    /**
     * Limit how many CultureTagOnArticles to delete.
     */
    limit?: number
  }

  /**
   * CultureTagOnArticle without action
   */
  export type CultureTagOnArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultureTagOnArticle
     */
    select?: CultureTagOnArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultureTagOnArticle
     */
    omit?: CultureTagOnArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultureTagOnArticleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    appleSub: 'appleSub',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    deviceId: 'deviceId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    revokedAt: 'revokedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const CultureArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    section: 'section',
    coverImageUrl: 'coverImageUrl',
    readTimeMinutes: 'readTimeMinutes',
    publishedAt: 'publishedAt',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CultureArticleScalarFieldEnum = (typeof CultureArticleScalarFieldEnum)[keyof typeof CultureArticleScalarFieldEnum]


  export const CultureArticleTranslationScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    lang: 'lang',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    contentMarkdown: 'contentMarkdown',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CultureArticleTranslationScalarFieldEnum = (typeof CultureArticleTranslationScalarFieldEnum)[keyof typeof CultureArticleTranslationScalarFieldEnum]


  export const CultureTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CultureTagScalarFieldEnum = (typeof CultureTagScalarFieldEnum)[keyof typeof CultureTagScalarFieldEnum]


  export const CultureTagOnArticleScalarFieldEnum: {
    articleId: 'articleId',
    tagId: 'tagId'
  };

  export type CultureTagOnArticleScalarFieldEnum = (typeof CultureTagOnArticleScalarFieldEnum)[keyof typeof CultureTagOnArticleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CultureSection'
   */
  export type EnumCultureSectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CultureSection'>
    


  /**
   * Reference to a field of type 'CultureSection[]'
   */
  export type ListEnumCultureSectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CultureSection[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    appleSub?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    appleSub?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appleSub?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "appleSub">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    appleSub?: SortOrder
    email?: SortOrderInput | SortOrder
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
    appleSub?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    deviceId?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
  }

  export type CultureArticleWhereInput = {
    AND?: CultureArticleWhereInput | CultureArticleWhereInput[]
    OR?: CultureArticleWhereInput[]
    NOT?: CultureArticleWhereInput | CultureArticleWhereInput[]
    id?: StringFilter<"CultureArticle"> | string
    slug?: StringFilter<"CultureArticle"> | string
    section?: EnumCultureSectionFilter<"CultureArticle"> | $Enums.CultureSection
    coverImageUrl?: StringNullableFilter<"CultureArticle"> | string | null
    readTimeMinutes?: IntNullableFilter<"CultureArticle"> | number | null
    publishedAt?: DateTimeNullableFilter<"CultureArticle"> | Date | string | null
    isPublished?: BoolFilter<"CultureArticle"> | boolean
    createdAt?: DateTimeFilter<"CultureArticle"> | Date | string
    updatedAt?: DateTimeFilter<"CultureArticle"> | Date | string
    translations?: CultureArticleTranslationListRelationFilter
    tags?: CultureTagOnArticleListRelationFilter
  }

  export type CultureArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    section?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    readTimeMinutes?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    translations?: CultureArticleTranslationOrderByRelationAggregateInput
    tags?: CultureTagOnArticleOrderByRelationAggregateInput
  }

  export type CultureArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CultureArticleWhereInput | CultureArticleWhereInput[]
    OR?: CultureArticleWhereInput[]
    NOT?: CultureArticleWhereInput | CultureArticleWhereInput[]
    section?: EnumCultureSectionFilter<"CultureArticle"> | $Enums.CultureSection
    coverImageUrl?: StringNullableFilter<"CultureArticle"> | string | null
    readTimeMinutes?: IntNullableFilter<"CultureArticle"> | number | null
    publishedAt?: DateTimeNullableFilter<"CultureArticle"> | Date | string | null
    isPublished?: BoolFilter<"CultureArticle"> | boolean
    createdAt?: DateTimeFilter<"CultureArticle"> | Date | string
    updatedAt?: DateTimeFilter<"CultureArticle"> | Date | string
    translations?: CultureArticleTranslationListRelationFilter
    tags?: CultureTagOnArticleListRelationFilter
  }, "id" | "slug">

  export type CultureArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    section?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    readTimeMinutes?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CultureArticleCountOrderByAggregateInput
    _avg?: CultureArticleAvgOrderByAggregateInput
    _max?: CultureArticleMaxOrderByAggregateInput
    _min?: CultureArticleMinOrderByAggregateInput
    _sum?: CultureArticleSumOrderByAggregateInput
  }

  export type CultureArticleScalarWhereWithAggregatesInput = {
    AND?: CultureArticleScalarWhereWithAggregatesInput | CultureArticleScalarWhereWithAggregatesInput[]
    OR?: CultureArticleScalarWhereWithAggregatesInput[]
    NOT?: CultureArticleScalarWhereWithAggregatesInput | CultureArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CultureArticle"> | string
    slug?: StringWithAggregatesFilter<"CultureArticle"> | string
    section?: EnumCultureSectionWithAggregatesFilter<"CultureArticle"> | $Enums.CultureSection
    coverImageUrl?: StringNullableWithAggregatesFilter<"CultureArticle"> | string | null
    readTimeMinutes?: IntNullableWithAggregatesFilter<"CultureArticle"> | number | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CultureArticle"> | Date | string | null
    isPublished?: BoolWithAggregatesFilter<"CultureArticle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CultureArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CultureArticle"> | Date | string
  }

  export type CultureArticleTranslationWhereInput = {
    AND?: CultureArticleTranslationWhereInput | CultureArticleTranslationWhereInput[]
    OR?: CultureArticleTranslationWhereInput[]
    NOT?: CultureArticleTranslationWhereInput | CultureArticleTranslationWhereInput[]
    id?: StringFilter<"CultureArticleTranslation"> | string
    articleId?: StringFilter<"CultureArticleTranslation"> | string
    lang?: EnumLanguageFilter<"CultureArticleTranslation"> | $Enums.Language
    title?: StringFilter<"CultureArticleTranslation"> | string
    subtitle?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    description?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    contentMarkdown?: StringFilter<"CultureArticleTranslation"> | string
    createdAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
    article?: XOR<CultureArticleScalarRelationFilter, CultureArticleWhereInput>
  }

  export type CultureArticleTranslationOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contentMarkdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: CultureArticleOrderByWithRelationInput
  }

  export type CultureArticleTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId_lang?: CultureArticleTranslationArticleIdLangCompoundUniqueInput
    AND?: CultureArticleTranslationWhereInput | CultureArticleTranslationWhereInput[]
    OR?: CultureArticleTranslationWhereInput[]
    NOT?: CultureArticleTranslationWhereInput | CultureArticleTranslationWhereInput[]
    articleId?: StringFilter<"CultureArticleTranslation"> | string
    lang?: EnumLanguageFilter<"CultureArticleTranslation"> | $Enums.Language
    title?: StringFilter<"CultureArticleTranslation"> | string
    subtitle?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    description?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    contentMarkdown?: StringFilter<"CultureArticleTranslation"> | string
    createdAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
    article?: XOR<CultureArticleScalarRelationFilter, CultureArticleWhereInput>
  }, "id" | "articleId_lang">

  export type CultureArticleTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contentMarkdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CultureArticleTranslationCountOrderByAggregateInput
    _max?: CultureArticleTranslationMaxOrderByAggregateInput
    _min?: CultureArticleTranslationMinOrderByAggregateInput
  }

  export type CultureArticleTranslationScalarWhereWithAggregatesInput = {
    AND?: CultureArticleTranslationScalarWhereWithAggregatesInput | CultureArticleTranslationScalarWhereWithAggregatesInput[]
    OR?: CultureArticleTranslationScalarWhereWithAggregatesInput[]
    NOT?: CultureArticleTranslationScalarWhereWithAggregatesInput | CultureArticleTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CultureArticleTranslation"> | string
    articleId?: StringWithAggregatesFilter<"CultureArticleTranslation"> | string
    lang?: EnumLanguageWithAggregatesFilter<"CultureArticleTranslation"> | $Enums.Language
    title?: StringWithAggregatesFilter<"CultureArticleTranslation"> | string
    subtitle?: StringNullableWithAggregatesFilter<"CultureArticleTranslation"> | string | null
    description?: StringNullableWithAggregatesFilter<"CultureArticleTranslation"> | string | null
    contentMarkdown?: StringWithAggregatesFilter<"CultureArticleTranslation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CultureArticleTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CultureArticleTranslation"> | Date | string
  }

  export type CultureTagWhereInput = {
    AND?: CultureTagWhereInput | CultureTagWhereInput[]
    OR?: CultureTagWhereInput[]
    NOT?: CultureTagWhereInput | CultureTagWhereInput[]
    id?: StringFilter<"CultureTag"> | string
    name?: StringFilter<"CultureTag"> | string
    createdAt?: DateTimeFilter<"CultureTag"> | Date | string
    articles?: CultureTagOnArticleListRelationFilter
  }

  export type CultureTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    articles?: CultureTagOnArticleOrderByRelationAggregateInput
  }

  export type CultureTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CultureTagWhereInput | CultureTagWhereInput[]
    OR?: CultureTagWhereInput[]
    NOT?: CultureTagWhereInput | CultureTagWhereInput[]
    createdAt?: DateTimeFilter<"CultureTag"> | Date | string
    articles?: CultureTagOnArticleListRelationFilter
  }, "id" | "name">

  export type CultureTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CultureTagCountOrderByAggregateInput
    _max?: CultureTagMaxOrderByAggregateInput
    _min?: CultureTagMinOrderByAggregateInput
  }

  export type CultureTagScalarWhereWithAggregatesInput = {
    AND?: CultureTagScalarWhereWithAggregatesInput | CultureTagScalarWhereWithAggregatesInput[]
    OR?: CultureTagScalarWhereWithAggregatesInput[]
    NOT?: CultureTagScalarWhereWithAggregatesInput | CultureTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CultureTag"> | string
    name?: StringWithAggregatesFilter<"CultureTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CultureTag"> | Date | string
  }

  export type CultureTagOnArticleWhereInput = {
    AND?: CultureTagOnArticleWhereInput | CultureTagOnArticleWhereInput[]
    OR?: CultureTagOnArticleWhereInput[]
    NOT?: CultureTagOnArticleWhereInput | CultureTagOnArticleWhereInput[]
    articleId?: StringFilter<"CultureTagOnArticle"> | string
    tagId?: StringFilter<"CultureTagOnArticle"> | string
    article?: XOR<CultureArticleScalarRelationFilter, CultureArticleWhereInput>
    tag?: XOR<CultureTagScalarRelationFilter, CultureTagWhereInput>
  }

  export type CultureTagOnArticleOrderByWithRelationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    article?: CultureArticleOrderByWithRelationInput
    tag?: CultureTagOrderByWithRelationInput
  }

  export type CultureTagOnArticleWhereUniqueInput = Prisma.AtLeast<{
    articleId_tagId?: CultureTagOnArticleArticleIdTagIdCompoundUniqueInput
    AND?: CultureTagOnArticleWhereInput | CultureTagOnArticleWhereInput[]
    OR?: CultureTagOnArticleWhereInput[]
    NOT?: CultureTagOnArticleWhereInput | CultureTagOnArticleWhereInput[]
    articleId?: StringFilter<"CultureTagOnArticle"> | string
    tagId?: StringFilter<"CultureTagOnArticle"> | string
    article?: XOR<CultureArticleScalarRelationFilter, CultureArticleWhereInput>
    tag?: XOR<CultureTagScalarRelationFilter, CultureTagWhereInput>
  }, "articleId_tagId">

  export type CultureTagOnArticleOrderByWithAggregationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    _count?: CultureTagOnArticleCountOrderByAggregateInput
    _max?: CultureTagOnArticleMaxOrderByAggregateInput
    _min?: CultureTagOnArticleMinOrderByAggregateInput
  }

  export type CultureTagOnArticleScalarWhereWithAggregatesInput = {
    AND?: CultureTagOnArticleScalarWhereWithAggregatesInput | CultureTagOnArticleScalarWhereWithAggregatesInput[]
    OR?: CultureTagOnArticleScalarWhereWithAggregatesInput[]
    NOT?: CultureTagOnArticleScalarWhereWithAggregatesInput | CultureTagOnArticleScalarWhereWithAggregatesInput[]
    articleId?: StringWithAggregatesFilter<"CultureTagOnArticle"> | string
    tagId?: StringWithAggregatesFilter<"CultureTagOnArticle"> | string
  }

  export type UserCreateInput = {
    id?: string
    appleSub: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    appleSub: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    appleSub: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CultureArticleCreateInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: CultureArticleTranslationCreateNestedManyWithoutArticleInput
    tags?: CultureTagOnArticleCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleUncheckedCreateInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: CultureArticleTranslationUncheckedCreateNestedManyWithoutArticleInput
    tags?: CultureTagOnArticleUncheckedCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: CultureArticleTranslationUpdateManyWithoutArticleNestedInput
    tags?: CultureTagOnArticleUpdateManyWithoutArticleNestedInput
  }

  export type CultureArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: CultureArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput
    tags?: CultureTagOnArticleUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type CultureArticleCreateManyInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationCreateInput = {
    id?: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: CultureArticleCreateNestedOneWithoutTranslationsInput
  }

  export type CultureArticleTranslationUncheckedCreateInput = {
    id?: string
    articleId: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureArticleTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: CultureArticleUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type CultureArticleTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationCreateManyInput = {
    id?: string
    articleId: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureArticleTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureTagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    articles?: CultureTagOnArticleCreateNestedManyWithoutTagInput
  }

  export type CultureTagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    articles?: CultureTagOnArticleUncheckedCreateNestedManyWithoutTagInput
  }

  export type CultureTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: CultureTagOnArticleUpdateManyWithoutTagNestedInput
  }

  export type CultureTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: CultureTagOnArticleUncheckedUpdateManyWithoutTagNestedInput
  }

  export type CultureTagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CultureTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureTagOnArticleCreateInput = {
    article: CultureArticleCreateNestedOneWithoutTagsInput
    tag: CultureTagCreateNestedOneWithoutArticlesInput
  }

  export type CultureTagOnArticleUncheckedCreateInput = {
    articleId: string
    tagId: string
  }

  export type CultureTagOnArticleUpdateInput = {
    article?: CultureArticleUpdateOneRequiredWithoutTagsNestedInput
    tag?: CultureTagUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type CultureTagOnArticleUncheckedUpdateInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CultureTagOnArticleCreateManyInput = {
    articleId: string
    tagId: string
  }

  export type CultureTagOnArticleUpdateManyMutationInput = {

  }

  export type CultureTagOnArticleUncheckedUpdateManyInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    appleSub?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    appleSub?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    appleSub?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCultureSectionFilter<$PrismaModel = never> = {
    equals?: $Enums.CultureSection | EnumCultureSectionFieldRefInput<$PrismaModel>
    in?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCultureSectionFilter<$PrismaModel> | $Enums.CultureSection
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CultureArticleTranslationListRelationFilter = {
    every?: CultureArticleTranslationWhereInput
    some?: CultureArticleTranslationWhereInput
    none?: CultureArticleTranslationWhereInput
  }

  export type CultureTagOnArticleListRelationFilter = {
    every?: CultureTagOnArticleWhereInput
    some?: CultureTagOnArticleWhereInput
    none?: CultureTagOnArticleWhereInput
  }

  export type CultureArticleTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CultureTagOnArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CultureArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    section?: SortOrder
    coverImageUrl?: SortOrder
    readTimeMinutes?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultureArticleAvgOrderByAggregateInput = {
    readTimeMinutes?: SortOrder
  }

  export type CultureArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    section?: SortOrder
    coverImageUrl?: SortOrder
    readTimeMinutes?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultureArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    section?: SortOrder
    coverImageUrl?: SortOrder
    readTimeMinutes?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultureArticleSumOrderByAggregateInput = {
    readTimeMinutes?: SortOrder
  }

  export type EnumCultureSectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CultureSection | EnumCultureSectionFieldRefInput<$PrismaModel>
    in?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCultureSectionWithAggregatesFilter<$PrismaModel> | $Enums.CultureSection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCultureSectionFilter<$PrismaModel>
    _max?: NestedEnumCultureSectionFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type CultureArticleScalarRelationFilter = {
    is?: CultureArticleWhereInput
    isNot?: CultureArticleWhereInput
  }

  export type CultureArticleTranslationArticleIdLangCompoundUniqueInput = {
    articleId: string
    lang: $Enums.Language
  }

  export type CultureArticleTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    contentMarkdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultureArticleTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    contentMarkdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultureArticleTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    contentMarkdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type CultureTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CultureTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CultureTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CultureTagScalarRelationFilter = {
    is?: CultureTagWhereInput
    isNot?: CultureTagWhereInput
  }

  export type CultureTagOnArticleArticleIdTagIdCompoundUniqueInput = {
    articleId: string
    tagId: string
  }

  export type CultureTagOnArticleCountOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type CultureTagOnArticleMaxOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type CultureTagOnArticleMinOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type CultureArticleTranslationCreateNestedManyWithoutArticleInput = {
    create?: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput> | CultureArticleTranslationCreateWithoutArticleInput[] | CultureArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureArticleTranslationCreateOrConnectWithoutArticleInput | CultureArticleTranslationCreateOrConnectWithoutArticleInput[]
    createMany?: CultureArticleTranslationCreateManyArticleInputEnvelope
    connect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
  }

  export type CultureTagOnArticleCreateNestedManyWithoutArticleInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput> | CultureTagOnArticleCreateWithoutArticleInput[] | CultureTagOnArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutArticleInput | CultureTagOnArticleCreateOrConnectWithoutArticleInput[]
    createMany?: CultureTagOnArticleCreateManyArticleInputEnvelope
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
  }

  export type CultureArticleTranslationUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput> | CultureArticleTranslationCreateWithoutArticleInput[] | CultureArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureArticleTranslationCreateOrConnectWithoutArticleInput | CultureArticleTranslationCreateOrConnectWithoutArticleInput[]
    createMany?: CultureArticleTranslationCreateManyArticleInputEnvelope
    connect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
  }

  export type CultureTagOnArticleUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput> | CultureTagOnArticleCreateWithoutArticleInput[] | CultureTagOnArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutArticleInput | CultureTagOnArticleCreateOrConnectWithoutArticleInput[]
    createMany?: CultureTagOnArticleCreateManyArticleInputEnvelope
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
  }

  export type EnumCultureSectionFieldUpdateOperationsInput = {
    set?: $Enums.CultureSection
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CultureArticleTranslationUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput> | CultureArticleTranslationCreateWithoutArticleInput[] | CultureArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureArticleTranslationCreateOrConnectWithoutArticleInput | CultureArticleTranslationCreateOrConnectWithoutArticleInput[]
    upsert?: CultureArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | CultureArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CultureArticleTranslationCreateManyArticleInputEnvelope
    set?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    disconnect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    delete?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    connect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    update?: CultureArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | CultureArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CultureArticleTranslationUpdateManyWithWhereWithoutArticleInput | CultureArticleTranslationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CultureArticleTranslationScalarWhereInput | CultureArticleTranslationScalarWhereInput[]
  }

  export type CultureTagOnArticleUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput> | CultureTagOnArticleCreateWithoutArticleInput[] | CultureTagOnArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutArticleInput | CultureTagOnArticleCreateOrConnectWithoutArticleInput[]
    upsert?: CultureTagOnArticleUpsertWithWhereUniqueWithoutArticleInput | CultureTagOnArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CultureTagOnArticleCreateManyArticleInputEnvelope
    set?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    disconnect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    delete?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    update?: CultureTagOnArticleUpdateWithWhereUniqueWithoutArticleInput | CultureTagOnArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CultureTagOnArticleUpdateManyWithWhereWithoutArticleInput | CultureTagOnArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
  }

  export type CultureArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput> | CultureArticleTranslationCreateWithoutArticleInput[] | CultureArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureArticleTranslationCreateOrConnectWithoutArticleInput | CultureArticleTranslationCreateOrConnectWithoutArticleInput[]
    upsert?: CultureArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | CultureArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CultureArticleTranslationCreateManyArticleInputEnvelope
    set?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    disconnect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    delete?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    connect?: CultureArticleTranslationWhereUniqueInput | CultureArticleTranslationWhereUniqueInput[]
    update?: CultureArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | CultureArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CultureArticleTranslationUpdateManyWithWhereWithoutArticleInput | CultureArticleTranslationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CultureArticleTranslationScalarWhereInput | CultureArticleTranslationScalarWhereInput[]
  }

  export type CultureTagOnArticleUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput> | CultureTagOnArticleCreateWithoutArticleInput[] | CultureTagOnArticleUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutArticleInput | CultureTagOnArticleCreateOrConnectWithoutArticleInput[]
    upsert?: CultureTagOnArticleUpsertWithWhereUniqueWithoutArticleInput | CultureTagOnArticleUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CultureTagOnArticleCreateManyArticleInputEnvelope
    set?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    disconnect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    delete?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    update?: CultureTagOnArticleUpdateWithWhereUniqueWithoutArticleInput | CultureTagOnArticleUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CultureTagOnArticleUpdateManyWithWhereWithoutArticleInput | CultureTagOnArticleUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
  }

  export type CultureArticleCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<CultureArticleCreateWithoutTranslationsInput, CultureArticleUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: CultureArticleCreateOrConnectWithoutTranslationsInput
    connect?: CultureArticleWhereUniqueInput
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type CultureArticleUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<CultureArticleCreateWithoutTranslationsInput, CultureArticleUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: CultureArticleCreateOrConnectWithoutTranslationsInput
    upsert?: CultureArticleUpsertWithoutTranslationsInput
    connect?: CultureArticleWhereUniqueInput
    update?: XOR<XOR<CultureArticleUpdateToOneWithWhereWithoutTranslationsInput, CultureArticleUpdateWithoutTranslationsInput>, CultureArticleUncheckedUpdateWithoutTranslationsInput>
  }

  export type CultureTagOnArticleCreateNestedManyWithoutTagInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput> | CultureTagOnArticleCreateWithoutTagInput[] | CultureTagOnArticleUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutTagInput | CultureTagOnArticleCreateOrConnectWithoutTagInput[]
    createMany?: CultureTagOnArticleCreateManyTagInputEnvelope
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
  }

  export type CultureTagOnArticleUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput> | CultureTagOnArticleCreateWithoutTagInput[] | CultureTagOnArticleUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutTagInput | CultureTagOnArticleCreateOrConnectWithoutTagInput[]
    createMany?: CultureTagOnArticleCreateManyTagInputEnvelope
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
  }

  export type CultureTagOnArticleUpdateManyWithoutTagNestedInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput> | CultureTagOnArticleCreateWithoutTagInput[] | CultureTagOnArticleUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutTagInput | CultureTagOnArticleCreateOrConnectWithoutTagInput[]
    upsert?: CultureTagOnArticleUpsertWithWhereUniqueWithoutTagInput | CultureTagOnArticleUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CultureTagOnArticleCreateManyTagInputEnvelope
    set?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    disconnect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    delete?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    update?: CultureTagOnArticleUpdateWithWhereUniqueWithoutTagInput | CultureTagOnArticleUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CultureTagOnArticleUpdateManyWithWhereWithoutTagInput | CultureTagOnArticleUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
  }

  export type CultureTagOnArticleUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput> | CultureTagOnArticleCreateWithoutTagInput[] | CultureTagOnArticleUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CultureTagOnArticleCreateOrConnectWithoutTagInput | CultureTagOnArticleCreateOrConnectWithoutTagInput[]
    upsert?: CultureTagOnArticleUpsertWithWhereUniqueWithoutTagInput | CultureTagOnArticleUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CultureTagOnArticleCreateManyTagInputEnvelope
    set?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    disconnect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    delete?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    connect?: CultureTagOnArticleWhereUniqueInput | CultureTagOnArticleWhereUniqueInput[]
    update?: CultureTagOnArticleUpdateWithWhereUniqueWithoutTagInput | CultureTagOnArticleUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CultureTagOnArticleUpdateManyWithWhereWithoutTagInput | CultureTagOnArticleUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
  }

  export type CultureArticleCreateNestedOneWithoutTagsInput = {
    create?: XOR<CultureArticleCreateWithoutTagsInput, CultureArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CultureArticleCreateOrConnectWithoutTagsInput
    connect?: CultureArticleWhereUniqueInput
  }

  export type CultureTagCreateNestedOneWithoutArticlesInput = {
    create?: XOR<CultureTagCreateWithoutArticlesInput, CultureTagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CultureTagCreateOrConnectWithoutArticlesInput
    connect?: CultureTagWhereUniqueInput
  }

  export type CultureArticleUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<CultureArticleCreateWithoutTagsInput, CultureArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CultureArticleCreateOrConnectWithoutTagsInput
    upsert?: CultureArticleUpsertWithoutTagsInput
    connect?: CultureArticleWhereUniqueInput
    update?: XOR<XOR<CultureArticleUpdateToOneWithWhereWithoutTagsInput, CultureArticleUpdateWithoutTagsInput>, CultureArticleUncheckedUpdateWithoutTagsInput>
  }

  export type CultureTagUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<CultureTagCreateWithoutArticlesInput, CultureTagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CultureTagCreateOrConnectWithoutArticlesInput
    upsert?: CultureTagUpsertWithoutArticlesInput
    connect?: CultureTagWhereUniqueInput
    update?: XOR<XOR<CultureTagUpdateToOneWithWhereWithoutArticlesInput, CultureTagUpdateWithoutArticlesInput>, CultureTagUncheckedUpdateWithoutArticlesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCultureSectionFilter<$PrismaModel = never> = {
    equals?: $Enums.CultureSection | EnumCultureSectionFieldRefInput<$PrismaModel>
    in?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCultureSectionFilter<$PrismaModel> | $Enums.CultureSection
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCultureSectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CultureSection | EnumCultureSectionFieldRefInput<$PrismaModel>
    in?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CultureSection[] | ListEnumCultureSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCultureSectionWithAggregatesFilter<$PrismaModel> | $Enums.CultureSection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCultureSectionFilter<$PrismaModel>
    _max?: NestedEnumCultureSectionFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    appleSub: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    appleSub: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    appleSub?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationCreateWithoutArticleInput = {
    id?: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureArticleTranslationUncheckedCreateWithoutArticleInput = {
    id?: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureArticleTranslationCreateOrConnectWithoutArticleInput = {
    where: CultureArticleTranslationWhereUniqueInput
    create: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput>
  }

  export type CultureArticleTranslationCreateManyArticleInputEnvelope = {
    data: CultureArticleTranslationCreateManyArticleInput | CultureArticleTranslationCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type CultureTagOnArticleCreateWithoutArticleInput = {
    tag: CultureTagCreateNestedOneWithoutArticlesInput
  }

  export type CultureTagOnArticleUncheckedCreateWithoutArticleInput = {
    tagId: string
  }

  export type CultureTagOnArticleCreateOrConnectWithoutArticleInput = {
    where: CultureTagOnArticleWhereUniqueInput
    create: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput>
  }

  export type CultureTagOnArticleCreateManyArticleInputEnvelope = {
    data: CultureTagOnArticleCreateManyArticleInput | CultureTagOnArticleCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type CultureArticleTranslationUpsertWithWhereUniqueWithoutArticleInput = {
    where: CultureArticleTranslationWhereUniqueInput
    update: XOR<CultureArticleTranslationUpdateWithoutArticleInput, CultureArticleTranslationUncheckedUpdateWithoutArticleInput>
    create: XOR<CultureArticleTranslationCreateWithoutArticleInput, CultureArticleTranslationUncheckedCreateWithoutArticleInput>
  }

  export type CultureArticleTranslationUpdateWithWhereUniqueWithoutArticleInput = {
    where: CultureArticleTranslationWhereUniqueInput
    data: XOR<CultureArticleTranslationUpdateWithoutArticleInput, CultureArticleTranslationUncheckedUpdateWithoutArticleInput>
  }

  export type CultureArticleTranslationUpdateManyWithWhereWithoutArticleInput = {
    where: CultureArticleTranslationScalarWhereInput
    data: XOR<CultureArticleTranslationUpdateManyMutationInput, CultureArticleTranslationUncheckedUpdateManyWithoutArticleInput>
  }

  export type CultureArticleTranslationScalarWhereInput = {
    AND?: CultureArticleTranslationScalarWhereInput | CultureArticleTranslationScalarWhereInput[]
    OR?: CultureArticleTranslationScalarWhereInput[]
    NOT?: CultureArticleTranslationScalarWhereInput | CultureArticleTranslationScalarWhereInput[]
    id?: StringFilter<"CultureArticleTranslation"> | string
    articleId?: StringFilter<"CultureArticleTranslation"> | string
    lang?: EnumLanguageFilter<"CultureArticleTranslation"> | $Enums.Language
    title?: StringFilter<"CultureArticleTranslation"> | string
    subtitle?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    description?: StringNullableFilter<"CultureArticleTranslation"> | string | null
    contentMarkdown?: StringFilter<"CultureArticleTranslation"> | string
    createdAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"CultureArticleTranslation"> | Date | string
  }

  export type CultureTagOnArticleUpsertWithWhereUniqueWithoutArticleInput = {
    where: CultureTagOnArticleWhereUniqueInput
    update: XOR<CultureTagOnArticleUpdateWithoutArticleInput, CultureTagOnArticleUncheckedUpdateWithoutArticleInput>
    create: XOR<CultureTagOnArticleCreateWithoutArticleInput, CultureTagOnArticleUncheckedCreateWithoutArticleInput>
  }

  export type CultureTagOnArticleUpdateWithWhereUniqueWithoutArticleInput = {
    where: CultureTagOnArticleWhereUniqueInput
    data: XOR<CultureTagOnArticleUpdateWithoutArticleInput, CultureTagOnArticleUncheckedUpdateWithoutArticleInput>
  }

  export type CultureTagOnArticleUpdateManyWithWhereWithoutArticleInput = {
    where: CultureTagOnArticleScalarWhereInput
    data: XOR<CultureTagOnArticleUpdateManyMutationInput, CultureTagOnArticleUncheckedUpdateManyWithoutArticleInput>
  }

  export type CultureTagOnArticleScalarWhereInput = {
    AND?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
    OR?: CultureTagOnArticleScalarWhereInput[]
    NOT?: CultureTagOnArticleScalarWhereInput | CultureTagOnArticleScalarWhereInput[]
    articleId?: StringFilter<"CultureTagOnArticle"> | string
    tagId?: StringFilter<"CultureTagOnArticle"> | string
  }

  export type CultureArticleCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CultureTagOnArticleCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleUncheckedCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CultureTagOnArticleUncheckedCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleCreateOrConnectWithoutTranslationsInput = {
    where: CultureArticleWhereUniqueInput
    create: XOR<CultureArticleCreateWithoutTranslationsInput, CultureArticleUncheckedCreateWithoutTranslationsInput>
  }

  export type CultureArticleUpsertWithoutTranslationsInput = {
    update: XOR<CultureArticleUpdateWithoutTranslationsInput, CultureArticleUncheckedUpdateWithoutTranslationsInput>
    create: XOR<CultureArticleCreateWithoutTranslationsInput, CultureArticleUncheckedCreateWithoutTranslationsInput>
    where?: CultureArticleWhereInput
  }

  export type CultureArticleUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: CultureArticleWhereInput
    data: XOR<CultureArticleUpdateWithoutTranslationsInput, CultureArticleUncheckedUpdateWithoutTranslationsInput>
  }

  export type CultureArticleUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CultureTagOnArticleUpdateManyWithoutArticleNestedInput
  }

  export type CultureArticleUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CultureTagOnArticleUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type CultureTagOnArticleCreateWithoutTagInput = {
    article: CultureArticleCreateNestedOneWithoutTagsInput
  }

  export type CultureTagOnArticleUncheckedCreateWithoutTagInput = {
    articleId: string
  }

  export type CultureTagOnArticleCreateOrConnectWithoutTagInput = {
    where: CultureTagOnArticleWhereUniqueInput
    create: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput>
  }

  export type CultureTagOnArticleCreateManyTagInputEnvelope = {
    data: CultureTagOnArticleCreateManyTagInput | CultureTagOnArticleCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type CultureTagOnArticleUpsertWithWhereUniqueWithoutTagInput = {
    where: CultureTagOnArticleWhereUniqueInput
    update: XOR<CultureTagOnArticleUpdateWithoutTagInput, CultureTagOnArticleUncheckedUpdateWithoutTagInput>
    create: XOR<CultureTagOnArticleCreateWithoutTagInput, CultureTagOnArticleUncheckedCreateWithoutTagInput>
  }

  export type CultureTagOnArticleUpdateWithWhereUniqueWithoutTagInput = {
    where: CultureTagOnArticleWhereUniqueInput
    data: XOR<CultureTagOnArticleUpdateWithoutTagInput, CultureTagOnArticleUncheckedUpdateWithoutTagInput>
  }

  export type CultureTagOnArticleUpdateManyWithWhereWithoutTagInput = {
    where: CultureTagOnArticleScalarWhereInput
    data: XOR<CultureTagOnArticleUpdateManyMutationInput, CultureTagOnArticleUncheckedUpdateManyWithoutTagInput>
  }

  export type CultureArticleCreateWithoutTagsInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: CultureArticleTranslationCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleUncheckedCreateWithoutTagsInput = {
    id?: string
    slug: string
    section: $Enums.CultureSection
    coverImageUrl?: string | null
    readTimeMinutes?: number | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: CultureArticleTranslationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type CultureArticleCreateOrConnectWithoutTagsInput = {
    where: CultureArticleWhereUniqueInput
    create: XOR<CultureArticleCreateWithoutTagsInput, CultureArticleUncheckedCreateWithoutTagsInput>
  }

  export type CultureTagCreateWithoutArticlesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CultureTagUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CultureTagCreateOrConnectWithoutArticlesInput = {
    where: CultureTagWhereUniqueInput
    create: XOR<CultureTagCreateWithoutArticlesInput, CultureTagUncheckedCreateWithoutArticlesInput>
  }

  export type CultureArticleUpsertWithoutTagsInput = {
    update: XOR<CultureArticleUpdateWithoutTagsInput, CultureArticleUncheckedUpdateWithoutTagsInput>
    create: XOR<CultureArticleCreateWithoutTagsInput, CultureArticleUncheckedCreateWithoutTagsInput>
    where?: CultureArticleWhereInput
  }

  export type CultureArticleUpdateToOneWithWhereWithoutTagsInput = {
    where?: CultureArticleWhereInput
    data: XOR<CultureArticleUpdateWithoutTagsInput, CultureArticleUncheckedUpdateWithoutTagsInput>
  }

  export type CultureArticleUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: CultureArticleTranslationUpdateManyWithoutArticleNestedInput
  }

  export type CultureArticleUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    section?: EnumCultureSectionFieldUpdateOperationsInput | $Enums.CultureSection
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    readTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: CultureArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type CultureTagUpsertWithoutArticlesInput = {
    update: XOR<CultureTagUpdateWithoutArticlesInput, CultureTagUncheckedUpdateWithoutArticlesInput>
    create: XOR<CultureTagCreateWithoutArticlesInput, CultureTagUncheckedCreateWithoutArticlesInput>
    where?: CultureTagWhereInput
  }

  export type CultureTagUpdateToOneWithWhereWithoutArticlesInput = {
    where?: CultureTagWhereInput
    data: XOR<CultureTagUpdateWithoutArticlesInput, CultureTagUncheckedUpdateWithoutArticlesInput>
  }

  export type CultureTagUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureTagUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    deviceId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CultureArticleTranslationCreateManyArticleInput = {
    id?: string
    lang: $Enums.Language
    title: string
    subtitle?: string | null
    description?: string | null
    contentMarkdown: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultureTagOnArticleCreateManyArticleInput = {
    tagId: string
  }

  export type CultureArticleTranslationUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureArticleTranslationUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contentMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultureTagOnArticleUpdateWithoutArticleInput = {
    tag?: CultureTagUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type CultureTagOnArticleUncheckedUpdateWithoutArticleInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CultureTagOnArticleUncheckedUpdateManyWithoutArticleInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CultureTagOnArticleCreateManyTagInput = {
    articleId: string
  }

  export type CultureTagOnArticleUpdateWithoutTagInput = {
    article?: CultureArticleUpdateOneRequiredWithoutTagsNestedInput
  }

  export type CultureTagOnArticleUncheckedUpdateWithoutTagInput = {
    articleId?: StringFieldUpdateOperationsInput | string
  }

  export type CultureTagOnArticleUncheckedUpdateManyWithoutTagInput = {
    articleId?: StringFieldUpdateOperationsInput | string
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