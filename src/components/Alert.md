### Alerts
Alerts can be of various styles.

```jsx
<Alert style="info">
  <h4>This is an info alert</h4>
</Alert>

<Alert style="success">
  <h4>This is a "success" alert</h4>
</Alert>

<Alert style="warning">
  <h4>This is a "warning" alert"</h4>

  <p>It has some extra text in it.</p>
</Alert>

<Alert style="error">
  <h4>This is an "error" alert</h4>
</Alert>
```

#### Floating alerts
Alerts may need to float on top of the page.

```jsx
<Alert style="info" floating>
  <h4>Floating alert</h4>
</Alert>
```

#### Text alerts
Some alerts may need to appear within a section on the page. You can set these using textOnly=true. You can set the your own custom text to use the alert color by using the class alert-text.

```jsx
<Alert style="warning" textOnly>
  <h4>A text only warning alert</h4>

  <p>Notice there is no border</p>
</Alert>

<Alert style="success" textOnly>
  <p className="alert-text">This one doesn't even have a header</p>
</Alert>
```