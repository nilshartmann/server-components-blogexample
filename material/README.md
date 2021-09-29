Material für Live Coding

- Dateien mit Unterstrich: Ausgangsmaterial (vor Beginn der Session in src-Verzeichnis kopieren)
  - Dabei nich die Datei kopieren, sondern nur deren Inhalt
  - Dateiendungen mit .txt, damit IDEA und andere Tools die Dateien ignorieren
- Dateien ohne Unterstrich: fertiger Code als Fallback (entspricht den im src-Verzeichnis versionierten Ständen)

## Beispiele

- `CommentEditor.client`: wie wird ein Request zum Server geschickt (Daten), in der Antwort aber UI (statt Daten) geliefert?
  - `_CommentEditor.client`: Stand nach erstem Beispiel
    - "nur" zeigen, dass setState etc. in Client-Kompoenten wie gewohnt funktioniert
  - `__CommentEditor.client`: Boilerplate-Code, vor dem Live Coding des 2. Teils reinkopieren
    - nach dem der CommentEditor grundsätzlich funktioniert, wird nun gezeigt, wie
      Antworten (UI keine Daten) im Client verarbeitet werden müssen
  - `CommentEditor.client`: fertiger Stand
  - raus für EnterJS
  - rein für JAX 
  - Was man lernt: man muss (stand heute) den "UI-Cache" selbst aktualisieren

- `PostComments.server`: Beispiel für eine Server-Komponente, die Suspense API verwendet
  - vor dem LiveCoding in PostPage auskommentieren/entfernen!
  - für EnterJS und JAX 