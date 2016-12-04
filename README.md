# cv-rs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This library primarily provides a binding and API for OpenCV 3.1.0.

This is a work-in-progress and modules/functions are implemented as
needed. Attempts to use [rust-bindgen](https://github.com/servo/rust-bindgen) or
[cpp_to_rust](https://github.com/rust-qt/cpp_to_rust) haven't been very
successful (I probably haven't tried hard enough). There is another port
[opencv-rust](https://github.com/kali/opencv-rust/) which generates OpenCV
bindings using a Python script (more automated).

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Background

## Install

First, add this to your `Cargo.toml`:

```
[dependencies]
cv = "0.1.0"
```

Next, add this to your crate:

```
extern crate cv;
use cv::*;
```

And then, enjoy the power of OpenCV.

## Usage

See available examples on how this library might be used.

- [Display Image](examples/display_image.rs)
- [Video Capture](examples/video_capture.rs), optional GPU code
- [Face Detection](examples/face_detect.rs)
- [Camshift](examples/camshift.rs)
- [HOG Detection](examples/hog.rs), optional GPU code

## API

See [Documentation](http://rust-vision.s3-website-us-west-2.amazonaws.com).

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Ben Zhang
