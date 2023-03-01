---
_template: template
---


+++
TocOpen = true
author = "Angela"
date = 2020-09-01T18:30:00Z
disableshare = false
showToc = true
tags = ["Machine Learning"]
title = "Exporting ML datasets"
[cover]
alt = ""
caption = ""
image = ""

+++
## Save and Load: TF2
<small>(imagine selling your super awesome models in a marketplace!)</small>

Let's say you have already built a model using Tensorflow2 (saved in `model` variable):

![model summary screenshot](/media/model.png)

and would now like to save it, TF2 comes with a function called `save_model` and `load_model` for such usecases.

Install:
```bash
sudo pip install h5py
```
(read: [what is hdf5 format?](https://en.wikipedia.org/wiki/Hierarchical_Data_Format#HDF5))

Use it as:
```python
tf.keras.models.save_model(
    model, '/path/to/save/saved_model', save_format='h5'
)
```

Load it as:

```python
loaded_model = tf.keras.models.load_model(
    '/content/saved_model', custom_objects=None, compile=True, options=None
)
loaded_model.summary()
```

You should see something like:

![loaded model summary](/media/loaded_model.png)

## Save and Load any other Model

For models built with libraries that do not come with a handy `save_model` function, `pickle` can be used:

Save:

```python
import pickle

# saving
with open('my-awesome-model.pk', 'wb') as handle:
    pickle.dump(model, handle, protocol=pickle.HIGHEST_PROTOCOL)
```

...and load:

```python
loaded_model = pickle.load(open('my-awesome-model.pk', 'rb'))

# test
type(loaded_tokenizer) 
```

## Import on your frontend
<small>Use <a href="https://docs.streamlit.io/en/stable/">streamlit</a>!</small>

for tensorflow models:

```python
import tensorflow as tf

# for tensorflow models
model = tf.keras.models.load_model(
  'path/to/saved_model', custom_objects=None, compile=True, options=None
)
```

for other models, saved using `pickle`

```python
# for other models
tokenizer = pickle.load(open(
  'path/to/my-awesome-model.pk', 'rb'
))
```

## Use it as you would 🦦

```python
predictions = model.predict(_data)
```

## 🔖 References
- [TF2 docs](https://www.tensorflow.org/tutorials/keras/save_and_load)
- [Save and Load an NN model](https://machinelearningmastery.com/save-load-keras-deep-learning-models/)
