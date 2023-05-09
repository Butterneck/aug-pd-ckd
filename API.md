# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="aug-pd-ckd.Service"></a>

#### Initializers <a name="Initializers" id="aug-pd-ckd.Service.Initializer"></a>

```typescript
import { Service } from 'aug-pd-ckd'

new Service(scope: Stack, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aug-pd-ckd.Service.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#aug-pd-ckd.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aug-pd-ckd.Service.Initializer.parameter.props">props</a></code> | <code><a href="#aug-pd-ckd.ServiceProps">ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aug-pd-ckd.Service.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="aug-pd-ckd.Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aug-pd-ckd.Service.Initializer.parameter.props"></a>

- *Type:* <a href="#aug-pd-ckd.ServiceProps">ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aug-pd-ckd.Service.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="aug-pd-ckd.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aug-pd-ckd.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aug-pd-ckd.Service.isConstruct"></a>

```typescript
import { Service } from 'aug-pd-ckd'

Service.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aug-pd-ckd.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aug-pd-ckd.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aug-pd-ckd.Service.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#aug-pd-ckd.Service.property.restApi">restApi</a></code> | <code>aws-cdk-lib.aws_apigateway.LambdaRestApi</code> | *No description.* |
| <code><a href="#aug-pd-ckd.Service.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aug-pd-ckd.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `function`<sup>Required</sup> <a name="function" id="aug-pd-ckd.Service.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="aug-pd-ckd.Service.property.restApi"></a>

```typescript
public readonly restApi: LambdaRestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.LambdaRestApi

---

##### `table`<sup>Optional</sup> <a name="table" id="aug-pd-ckd.Service.property.table"></a>

```typescript
public readonly table: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


## Structs <a name="Structs" id="Structs"></a>

### ServiceProps <a name="ServiceProps" id="aug-pd-ckd.ServiceProps"></a>

#### Initializer <a name="Initializer" id="aug-pd-ckd.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'aug-pd-ckd'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aug-pd-ckd.ServiceProps.property.codeDirectory">codeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aug-pd-ckd.ServiceProps.property.tableProps">tableProps</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableProps</code> | *No description.* |

---

##### `codeDirectory`<sup>Required</sup> <a name="codeDirectory" id="aug-pd-ckd.ServiceProps.property.codeDirectory"></a>

```typescript
public readonly codeDirectory: string;
```

- *Type:* string

---

##### `tableProps`<sup>Optional</sup> <a name="tableProps" id="aug-pd-ckd.ServiceProps.property.tableProps"></a>

```typescript
public readonly tableProps: TableProps;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableProps

---



