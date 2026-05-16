export type { OGSchemaType, OGSchemaTypeElementInput, OGSchemaTypeElementSelect, OGSchemaTypeElementInputMultiple };

interface SelectOption {
  label: string
  value: string | number
}

interface SelectGroupOption {
  type: 'group'
  label: string
  children: SelectOption[]
}

interface OGSchemaTypeElementBase {
  key: string
  label: string
  placeholder: string
}

interface OGSchemaTypeElementInput extends OGSchemaTypeElementBase {
  type: 'input'
}

interface OGSchemaTypeElementInputMultiple extends OGSchemaTypeElementBase {
  type: 'input-multiple'
}

interface OGSchemaTypeElementSelect extends OGSchemaTypeElementBase {
  type: 'select'
  options: Array<SelectOption | SelectGroupOption>
}

interface OGSchemaType {
  name: string
  elements: (OGSchemaTypeElementSelect | OGSchemaTypeElementInput | OGSchemaTypeElementInputMultiple)[]
}
