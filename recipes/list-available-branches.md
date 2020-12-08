---
title: Getting local branches
---

Sometimes for scripting you need to grab the available branch names

```sh
# 'grep -v *' will remove the current branch, as indicated in the output by a '*'
git branch | grep -v *
```
