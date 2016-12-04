# cv-rs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This library primarily provides bindings and APIs for OpenCV 3.1.0.

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

OpenCV (Open Source Computer Vision Library: http://opencv.org) is an
open-source BSD-licensed library that includes several hundreds of computer
vision algorithms. The document describes the so-called OpenCV 2.x API, which is
essentially a C++ API, as opposite to the C-based OpenCV 1.x API. The latter is
described in opencv1x.pdf.

This library provides bindings to access OpenCV functionalities using Rust
FFI. First, C bindings are created (in [native](native) folder); then Rust APIs
are constructed atop. Although this is an inefficient method, it has served me
well as a learning experience to both OpenCV and Rust.

## Install

Before anything, make sure you have OpenCV 3 installed. Read this
[Introduction to OpenCV](http://docs.opencv.org/3.1.0/df/d65/tutorial_table_of_content_introduction.html) to get started.

Then in any Rust project, add this to your `Cargo.toml`:

```
[dependencies]
cv = "0.1.0"
```

And add this to your crate:

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
