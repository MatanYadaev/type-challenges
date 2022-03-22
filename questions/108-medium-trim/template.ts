type TrimTuple = ' ' | '\t' | '\n'

type Trim<String extends string> =
    String extends `${TrimTuple}${infer Pre}`
      ? Trim<Pre>
      : (
        String extends `${infer Post}${TrimTuple}`
          ? Trim<Post>
          : String
      )
