### Plain Buttons

Plain buttons and their disabled. Button text should be in title case (all words are capitalized).

```jsx
<div className="row">
  <div className="col s12 l6">
    <Button type="default" onClick={()=>alert('The button was clicked!')}>
        Default
    </Button>
    {' '}
    <Button type="primary">
        Primary
    </Button>
    {' '}
    <Button type="danger">
        Danger
    </Button>
  </div>
</div>
<div className="row">
  <div className="col s12 l6">
    <Button type="default" isDisabled onClick={()=>alert('The button was clicked!')}>
        Default
    </Button>
    {' '}
    <Button type="primary" isDisabled>
        Primary
    </Button>
    {' '}
    <Button type="danger" isDisabled>
        Danger
    </Button>
  </div>
</div>
```

### Button Sizes

Different bootstrap-sized buttons and their disabled states.

```jsx
<div className="row">
  <div className="col s12 l6">
    <Button type="default" size="small">
        Small
    </Button>
    {' '}
    <Button type="default" size="medium">
        Medium
    </Button>
    {' '}
    <Button type="default" size="large">
        Large
    </Button>
  </div>
  <div className="col s12 l6">
    <Button type="default" size="small" isDisabled>
        Small
    </Button>
    {' '}
    <Button type="default" size="medium" isDisabled>
        Medium
    </Button>
    {' '}
    <Button type="default" size="large" isDisabled>
        Large
    </Button>
  </div>
</div>

<div className="row">
  <div className="col s12 l6">
    <Button type="primary" size="small">
        Small
    </Button>
    {' '}
    <Button type="primary" size="medium">
        Medium
    </Button>
    {' '}
    <Button type="primary" size="large">
        Large
    </Button>
  </div>
  <div className="col s12 l6">
    <Button type="primary" size="small" isDisabled>
        Small
    </Button>
    {' '}
    <Button type="primary" size="medium" isDisabled>
        Medium
    </Button>
    {' '}
    <Button type="primary" size="large" isDisabled>
        Large
    </Button>
  </div>
</div>

<div className="row">
  <div className="col s12 l6">
    <Button type="link" size="small">
        Small
    </Button>
    {' '}
    <Button type="link" size="medium">
        Medium
    </Button>
    {' '}
    <Button type="link" size="large">
        Large
    </Button>
  </div>
  <div className="col s12 l6">
    <Button type="link" size="small" isDisabled>
        Small
    </Button>
    {' '}
    <Button type="link" size="medium" isDisabled>
        Medium
    </Button>
    {' '}
    <Button type="link" size="large" isDisabled>
        Large
    </Button>
  </div>
</div>
```

### Button Border Styles

These buttons have no fill they only have a border to define their hit target.

```jsx
<div className="row">
    <div className="col s12 l6">
        <Button type="default" isBorder>
           Default
        </Button>
        {' '}
        <Button type="success" isBorder>
           Success
        </Button>
        {' '}
        <Button type="danger" isBorder>
           Danger
        </Button>
        {' '}
        <Button type="warning" isBorder>
           Warning
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="default" isBorder isDisabled>
           Default
        </Button>
        {' '}
        <Button type="success" isBorder isDisabled>
           Success
        </Button>
        {' '}
        <Button type="danger" isBorder isDisabled>
           Danger
        </Button>
        {' '}
        <Button type="warning" isBorder isDisabled>
           Warning
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="default" isBorderless>
           Default
        </Button>
        {' '}
        <Button type="success" isBorderless>
           Success
        </Button>
        {' '}
        <Button type="danger" isBorderless>
           Danger
        </Button>
        {' '}
        <Button type="warning" isBorderless>
           Warning
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="default" isBorderless isDisabled>
           Default
        </Button>
        {' '}
        <Button type="success" isBorderless isDisabled>
           Success
        </Button>
        {' '}
        <Button type="danger" isBorderless isDisabled>
           Danger
        </Button>
        {' '}
        <Button type="warning" isBorderless isDisabled>
           Warning
        </Button>
    </div>
</div>
```

### Button Shapes

Button icons only and their disabled states, not to be confused with any other icon + text combo. Note icons without text should include the aria-label attribute. Icon only buttons should be used primarily for mobile situations.

```jsx
<div className="row">
    <div className="col s12 l6">
        <Button type="default" size="small" shape="default">
           ✓
        </Button>
        {' '}
        <Button type="default" size="medium" shape="default">
            ✓
        </Button>
        {' '}
        <Button type="default" size="large" shape="default">
            ✓
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="default" size="small" shape="default" isDisabled>
           ✓
        </Button>
        {' '}
        <Button type="default" size="medium" shape="default" isDisabled>
            ✓
        </Button>
        {' '}
        <Button type="default" size="large" shape="default" isDisabled>
            ✓
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="primary" size="small" shape="circle">
           ✓
        </Button>
        {' '}
        <Button type="primary" size="medium" shape="circle">
            ✓
        </Button>
        {' '}
        <Button type="primary" size="large" shape="circle">
            ✓
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="primary" size="small" shape="circle" isDisabled>
           ✓
        </Button>
        {' '}
        <Button type="primary" size="medium" shape="circle" isDisabled>
            ✓
        </Button>
        {' '}
        <Button type="primary" size="large" shape="circle" isDisabled>
            ✓
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="danger" size="small" shape="pill">
           ✓
        </Button>
        {' '}
        <Button type="danger" size="medium" shape="pill">
            ✓
        </Button>
        {' '}
        <Button type="danger" size="large" shape="pill">
            ✓
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="danger" size="small" shape="pill" isDisabled>
           ✓
        </Button>
        {' '}
        <Button type="danger" size="medium" shape="pill" isDisabled>
            ✓
        </Button>
        {' '}
        <Button type="danger" size="large" shape="pill" isDisabled>
            ✓
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="link" size="small" shape="pill">
           ✓
        </Button>
        {' '}
        <Button type="link" size="medium" shape="pill">
            ✓
        </Button>
        {' '}
        <Button type="link" size="large" shape="pill">
            ✓
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="link" size="small" shape="pill" isDisabled>
           ✓
        </Button>
        {' '}
        <Button type="link" size="medium" shape="pill" isDisabled>
            ✓
        </Button>
        {' '}
        <Button type="link" size="large" shape="pill" isDisabled>
            ✓
        </Button>
    </div>
</div>
```

### Button Blocks

display: block buttons that stack on top of each other, rather than next to each other and their disabled states. Pill buttons should only be used on end user facing products.

```jsx
<div className="row">
    <div className="col s12 l6">
        <Button size="small" isBlock>
           Small
        </Button>
        {' '}
        <Button size="medium" isBlock>
           Normal
        </Button>
        {' '}
        <Button size="large" isBlock>
           Large
        </Button>
    </div>

    <div className="col s12 l6">
        <Button size="small" isBlock isDisabled>
           Small
        </Button>
        {' '}
        <Button size="medium" isBlock isDisabled>
           Normal
        </Button>
        {' '}
        <Button size="large" isBlock isDisabled>
           Large
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="primary" size="small" isBlock>
           Small
        </Button>
        {' '}
        <Button type="primary" size="medium" isBlock>
           Normal
        </Button>
        {' '}
        <Button type="primary" size="large" isBlock>
           Large
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="primary" size="small" isBlock isDisabled>
           Small
        </Button>
        {' '}
        <Button type="primary" size="medium" isBlock isDisabled>
           Normal
        </Button>
        {' '}
        <Button type="primary" size="large" isBlock isDisabled>
           Large
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button shape="pill" size="small" isBlock>
           Small
        </Button>
        {' '}
        <Button shape="pill" size="medium" isBlock>
           Normal
        </Button>
        {' '}
        <Button shape="pill" size="large" isBlock>
           Large
        </Button>
    </div>

    <div className="col s12 l6">
        <Button shape="pill" size="small" isBlock isDisabled>
           Small
        </Button>
        {' '}
        <Button shape="pill" size="medium" isBlock isDisabled>
           Normal
        </Button>
        {' '}
        <Button shape="pill" size="large" isBlock isDisabled>
           Large
        </Button>
    </div>
</div>

<div className="row">
    <div className="col s12 l6">
        <Button type="link" size="small" isBlock>
           Small
        </Button>
        {' '}
        <Button type="link" size="medium" isBlock>
           Normal
        </Button>
        {' '}
        <Button type="link" size="large" isBlock>
           Large
        </Button>
    </div>

    <div className="col s12 l6">
        <Button type="link" size="small" isBlock isDisabled>
           Small
        </Button>
        {' '}
        <Button type="link" size="medium" isBlock isDisabled>
           Normal
        </Button>
        {' '}
        <Button type="link" size="large" isBlock isDisabled>
           Large
        </Button>
    </div>
</div>
```
