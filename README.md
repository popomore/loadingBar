# Loading Bar

A fake loading bar without server.

---

## Usage

```
loadingBar([[20, 100], [100, 500]], function(percent) {
  $('#loading').css('width', percent + '%');
}, function() {
  alert(complete);
});
```

See [example](http://popomore.github.com/loadingBar/examples/)

## API

loadingBar(config, every, complete)

Loading Bar's minimum unit is 1%, and it will take diffrent timeout in every 1%. You can specify timeout in `config`.

### config

Specify timeout

`[[20, 100], [80, 200], [100, 500]]` means 0%~20% takes 100ms per unit and 20%~100% takes 500ms per unit.

### every

Every unit will be called.

### complete

100% will be called. 

## License

MIT
