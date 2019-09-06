### Plain Buttons
Plain buttons and their disabled. Button text should be in title case (all words are capitalized).

```jsx
<div>
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

<div>
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
```

### Button Sizes
Different bootstrap-sized buttons and their disabled states.

```jsx
<div className="flex">
    <div className="w-1/2">
        <div>
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
        
        <div>
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
    </div>
    
    <div className="w-1/2">
        <div>
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
        
        <div>
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
</div>
```

### Button Shapes
Button icons only and their disabled states, not to be confused with any other icon + text combo. Note icons without text should include the aria-label attribute. Icon only buttons should be used primarily for mobile situations.

```jsx
<div className="flex">
    <div className="w-1/2">
        <div>
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
        
        <div>
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
        
        <div>
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
    </div>
    
    <div className="w-1/2">
        <div>
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
        
        <div>
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
        
        <div>
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
</div>
```