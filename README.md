# Anleitung

### Schritt 1

Klicken Sie auf den grünen Knopf "Code" und wählen Sie anschließend im Dropdown Menü "Download Zip" um die Dateien Herunterzuladen.

### Schritt 2

Öffnen Sie den Ordner in Visual Studio Code.

### Schritt 3

Herunterladen der Extension '[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)'


### Schritt 4

Navigieren Sie innerhalb von Visual Studio Code auf die index.html (public_html/html/index.html)<br>
Zuletzt klicken Sie auf "Go Live" am unteren rechten Bildschirmrand.<br>
(Falls dieser Knopf nicht da ist, versuchen Sie einmal VSCode neuzustarten)<br>
Hiermit öffnet sich nun ein Browserfenster mit der Startseite. Nun können Sie wie gewünscht auf den Seiten navigieren.<br>

<br>

## Mögliche Fehler

### Bilder werden nicht angezeigt

Hier haben Sie den falschen Ordner geöffnet, weshalb die Pfade von den Bildern oder auch Dateien nicht mehr korrekt abgerufen werden können.<br>
Stellen Sie sicher, dass Sie den Ordner mit dem Namen 'Mastobst-main' öffnen und in Visual Studio Code der erste Ordner 'public_html' ist.<br>

<br>
<br>

## SCSS Anpassungen

Da wir den CSS pre-processor SCSS verwenden, ist zum Bearbeiten eine weitere Extension in VSCode zzgl. config Anpassung notwendig.<br>
Folgende Schritte sind notwendig um, dass Änderungen in eine einzelne main.css komprimiert werden. Diese CSS-Datei ist auf jeder Seite eingebunden.<br>
Ohne diese Schritte würden von den einzelnen SCSS Dateien gleichnamige CSS Dateien erstellt werden, welche nicht eingebunden werden.<br>

### Schritt 1

Herunterladen der Extension '[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)'

### Schritt 2

Klicken Sie in VSCode unten links auf das Zahnrad und wählen Sie 'settings' oder 'Einstellungen' je nach Sprache.<br>
Suchen Sie nun in der oberen Leiste nach 'liveSassCompile.settings.formats' und klicken Sie beim ersten Suchergebnis auf 'Edit in settings.json'.<br>

### Schritt 3

Nun müssen Sie hier noch folgendes json einfügen und dann abspeichern:
```
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "~/../css",
      "savePathReplacementPairs": null
    }
  ]
```

### Schritt 4

Zuletzt muss in der Leiste unten, wo Sie auch auf 'Go Live' zum Server starten geklickt haben auf 'Watch Sass' geklickt werden.<br>
(Falls dieser Knopf nicht da ist, versuchen Sie einmal VSCode neuzustarten)<br>
Nun wird einmal der gesamte SCSS Inhalt kompiliert und darauffolgende Änderungen automatisch kompiliert.<br>

<br>

## Quellenangaben

### Schriftart:

    https://www.cufonfonts.com/font/sf-pro-display

### Icons

    https://www.flaticon.com/de/kostenloses-icon/fax_2611590
    https://www.flaticon.com/de/kostenloses-icon/pfeilspitze-der-wiedergabetaste_27223
    https://www.flaticon.com/de/kostenloses-icon/pause_37505
    https://www.flaticon.com/de/kostenloses-icon/mail_646094
    https://www.flaticon.com/de/kostenloses-icon/anruf_126509
    https://www.flaticon.com/free-icon/arrow-up_8287014
    https://www.flaticon.com/free-icon/download_3502477
    https://www.flaticon.com/de/kostenloses-icon/buchstabe-x_109602

### Shop

    https://frischehelden.shop/Ananas-Mini/100500005
    https://akorn.tech/de/products-apple/
    https://www.granini.de/fruchtlexikon/die-aprikose
    https://readytoeat.de/reife-avocado.html
    https://www.dole.com/en/produce/fruits/bananas
    https://www.frischehelden.shop/Birne-Conference/100300005
    https://www.unsereheimat.de/unsere-produkte/details/392-brombeere/
    https://www.jctropicals.us/blog/products/dry-coconut/
    https://www.andreashof-zuerker.de/produkt/erdbeeren/
    https://granatapfelsaft.de/
    https://etepetete-bio.de/obst-und-gemueseglossar-detail/grapefruit
    https://futterplan.net/hagebutten-fuer-den-hund/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Heidelbeer-10-ml
    https://www.unsereheimat.de/unsere-produkte/details/389-himbeere/
    https://www.aronia-original.de/beerenblog/produkte/johannisbeere
    http://www.frutal-gmbh.com/sortiment/kirschen
    https://www.cobana.com/produkte/kiwi/
    https://www.dole.com/de-de/produce/fruits/litchi
    https://hellobazaar.de/shop/mango/
    https://glycemic-index.net/de/nektarine-frisches-obst/
    https://proto.gr/de/orange
    https://hellobazaar.de/shop/papaya/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Pfirsich-10-ml
    https://www.dole.com/de-de/produce/fruits/plums
    https://www.schwartau.de/gelee-quitte
    https://www.frischehelden.shop/Carambola/100500006
    https://shop.rewe.de/c/trauben/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Melone-Wassermelone-10-ml
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Zitrone-10-ml
