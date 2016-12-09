var searchIndex = {};
searchIndex["cv"] = {"doc":"This library primarily provides a binding and API for OpenCV 3.1.0.","items":[[3,"Mat","cv","This wraps OpenCV&#39;s `Mat` class which is designed for n-dimensional dense\narray. It&#39;s the most widely used data structure in image/video processing\nsince images are often stored as `Mat`.",null,null],[12,"inner","","Pointer to the actual C/C++ data structure",0,null],[12,"cols","","Number of columns",0,null],[12,"rows","","Number of rows",0,null],[12,"depth","","Depth of this mat",0,null],[3,"Point2f","","2D floating points specified by its coordinates `x` and `y`.",null,null],[12,"x","","x coordinate",1,null],[12,"y","","y coordinate",1,null],[3,"Point2i","","2D integer points specified by its coordinates `x` and `y`.",null,null],[12,"x","","x coordinate",2,null],[12,"y","","y coordinate",2,null],[3,"Rect","","The `Rect` defines a rectangle in integer.",null,null],[12,"x","","x coordinate of the left-top corner",3,null],[12,"y","","y coordinate of the left-top corner",3,null],[12,"width","","width of this rectangle",3,null],[12,"height","","height of this rectangle",3,null],[3,"Scalar","","A 4-element struct that is widely used to pass pixel values.",null,null],[3,"Size2f","","`Size2f` struct is used for specifying the size (`width` and `height` as\n`f32`) of an image or rectangle.",null,null],[12,"width","","width",4,null],[12,"height","","height",4,null],[3,"Size2i","","`Size2i` struct is used for specifying the size (`width` and `height` as\n`i32`) of an image or rectangle.",null,null],[12,"width","","width",5,null],[12,"height","","height",5,null],[4,"CvType","","Here is the `CvType` in an easy-to-read table.",null,null],[13,"Cv8UC1","","8 bit, single channel (grey image)",6,null],[13,"Cv8UC2","","8 bit, two channel (rarelly seen)",6,null],[13,"Cv8UC3","","8 bit, three channels (RGB image)",6,null],[4,"FlipCode","","A flag to specify how to flip the image. see\n[Mat::flip](struct.Mat.html#method.flip)",null,null],[13,"XAxis","","Along x-axis: dst[i, j] = src[src.rows - i - 1, j]",7,null],[13,"YAxis","","Along y-axis: dst[i, j] = src[i, src.cols - j - 1]",7,null],[13,"XYAxis","","Along both axis: dst[i, j] = src[src.rows - i - 1, src.cols - j - 1]",7,null],[4,"LineTypes","","Line type",null,null],[13,"Filled","","Default type",8,null],[13,"Line4","","4-connected line",8,null],[13,"Line8","","8-connected line",8,null],[13,"LineAA","","antialiased line",8,null],[4,"NormTypes","","Normalization type. Please refer to [OpenCV&#39;s\ndocumentation](http://docs.cv.org/trunk/d2/de8/group__core__array.html#gad12cefbcb5291cf958a85b4b67b6149f).",null,null],[13,"NormInf","","Normalized using `max`",9,null],[13,"NormL1","","Normalized using L1 distance",9,null],[13,"NormL2","","Normalized using L2 distance",9,null],[13,"NormL2Sqr","","Normalized using L2 sqr distance",9,null],[13,"NormHamming","","Normalized using hamming distance",9,null],[13,"NormHamming2","","Normalized using hamming2 distance",9,null],[13,"NormRelative","","Normalized using relative distance",9,null],[13,"NormMinMax","","Normalized using minmax distance",9,null],[11,"fmt","","",0,null],[11,"default","","",10,{"inputs":[],"output":{"name":"scalar"}}],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"new","","Creates a new scalar object.",10,{"inputs":[{"name":"i32"},{"name":"i32"},{"name":"i32"},{"name":"i32"}],"output":{"name":"self"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"point2i"}}],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"default","","",1,{"inputs":[],"output":{"name":"point2f"}}],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"default","","",5,{"inputs":[],"output":{"name":"size2i"}}],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"new","","Creates a new `Size2i` object with `width` and `height`",5,{"inputs":[{"name":"i32"},{"name":"i32"}],"output":{"name":"self"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"size2f"}}],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"default","","",3,{"inputs":[],"output":{"name":"rect"}}],[11,"fmt","","",3,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"new","","Creates a new `Rect` with (x, y, width, height) parameters.",3,{"inputs":[{"name":"i32"},{"name":"i32"},{"name":"i32"},{"name":"i32"}],"output":{"name":"self"}}],[11,"scale","","Scales the rectangle by the specified ratio.",3,null],[11,"normalize_to_mat","","Normalize the rectangle according to the image (if the rectangle is\ninside the image, then the result should be all within (0, 1).",3,null],[11,"fmt","","",8,null],[11,"eq","","",8,null],[11,"clone","","",8,null],[11,"fmt","","",7,null],[11,"clone","","",7,null],[11,"from_raw","","Creates a `Mat` object from raw `CMat` pointer. This will read the rows\nand cols of the image.",0,null],[11,"new","","Creates an empty `Mat` struct.",0,{"inputs":[],"output":{"name":"mat"}}],[11,"with_size","","Create an empty `Mat` with specific size (rows, cols and types).",0,{"inputs":[{"name":"i32"},{"name":"i32"},{"name":"i32"}],"output":{"name":"self"}}],[11,"from_path","","Create a `Mat` from reading the image specified by the path.",0,{"inputs":[{"name":"str"},{"name":"i32"}],"output":{"name":"self"}}],[11,"data","","Returns the raw data (as a uchar pointer)",0,null],[11,"total","","Returns the total number of array elements. The method returns the\nnumber of array elements (a number of pixels if the array represents an\nimage). For example, images with 1920x1080 resolution will return\n2073600.",0,null],[11,"elem_size","","Returns the matrix element size in bytes. The method returns the matrix\nelement size in bytes. For example, if the matrix type is CV_16SC3 , the\nmethod returns 3*sizeof(short) or 6.",0,null],[11,"size","","Returns the size of this matrix.",0,null],[11,"is_valid","","Check if the `Mat` is valid or not.",0,null],[11,"roi","","Return a region of interest from a `Mat` specfied by a `Rect`.",0,null],[11,"logic_and","","Apply a mask to myself.",0,null],[11,"flip","","Flips an image around vertical, horizontal, or both axes.",0,null],[11,"show","","Calls out to highgui to show the image, the duration is specified by\n`delay`.",0,null],[11,"cv_type","","Returns the images type. For supported types, please see\n[CvType](enum.CvType).",0,null],[11,"drop","","",0,null],[11,"fmt","","",6,null],[11,"eq","","",6,null],[11,"clone","","",6,null],[11,"from_i64","","",6,{"inputs":[{"name":"i64"}],"output":{"name":"option"}}],[11,"from_u64","","",6,{"inputs":[{"name":"u64"}],"output":{"name":"option"}}],[11,"fmt","","",9,null],[11,"eq","","",9,null],[11,"clone","","",9,null],[11,"from_i64","","",9,{"inputs":[{"name":"i64"}],"output":{"name":"option"}}],[11,"from_u64","","",9,{"inputs":[{"name":"u64"}],"output":{"name":"option"}}],[11,"in_range","","Check if Mat elements lie between the elements of two other arrays\n(lowerb and upperb). The output Mat has the same size as `self` and\nCV_8U type.",0,null],[11,"mix_channels","","Copy specified channels from `self` to the specified channels of output\n`Mat`.",0,null],[11,"normalize","","Normalize the Mat according to the normalization type.",0,null],[0,"imgproc","","Image processing, see [OpenCV\nimgproc](http://docs.opencv.org/3.1.0/d7/dbd/group__imgproc.html).",null,null],[4,"ColorConversionCodes","cv::imgproc","Color conversion code used in\n[cvt_color](../struct.Mat.html#method.cvt_color).",null,null],[13,"BGR2BGRA","","",11,null],[13,"BGRA2BGR","","",11,null],[13,"BGR2RGBA","","",11,null],[13,"RGBA2BGR","","",11,null],[13,"BGR2RGB","","",11,null],[13,"BGRA2RGBA","","",11,null],[13,"BGR2GRAY","","",11,null],[13,"RGB2GRAY","","",11,null],[13,"GRAY2BGR","","",11,null],[13,"GRAY2BGRA","","",11,null],[13,"BGRA2GRAY","","",11,null],[13,"RGBA2GRAY","","",11,null],[13,"BGR2BGR565","","",11,null],[13,"RGB2BGR565","","",11,null],[13,"BGR5652BGR","","",11,null],[13,"BGR5652RGB","","",11,null],[13,"BGRA2BGR565","","",11,null],[13,"RGBA2BGR565","","",11,null],[13,"BGR5652BGRA","","",11,null],[13,"BGR5652RGBA","","",11,null],[13,"GRAY2BGR565","","",11,null],[13,"BGR5652GRAY","","",11,null],[13,"BGR2BGR555","","",11,null],[13,"RGB2BGR555","","",11,null],[13,"BGR5552BGR","","",11,null],[13,"BGR5552RGB","","",11,null],[13,"BGRA2BGR555","","",11,null],[13,"RGBA2BGR555","","",11,null],[13,"BGR5552BGRA","","",11,null],[13,"BGR5552RGBA","","",11,null],[13,"GRAY2BGR555","","",11,null],[13,"BGR5552GRAY","","",11,null],[13,"BGR2XYZ","","",11,null],[13,"RGB2XYZ","","",11,null],[13,"XYZ2BGR","","",11,null],[13,"XYZ2RGB","","",11,null],[13,"BGR2YCrCb","","",11,null],[13,"RGB2YCrCb","","",11,null],[13,"YCrCb2BGR","","",11,null],[13,"YCrCb2RGB","","",11,null],[13,"BGR2HSV","","",11,null],[13,"RGB2HSV","","",11,null],[13,"BGR2Lab","","",11,null],[13,"RGB2Lab","","",11,null],[13,"BGR2Luv","","",11,null],[13,"RGB2Luv","","",11,null],[13,"BGR2HLS","","",11,null],[13,"RGB2HLS","","",11,null],[13,"HSV2BGR","","",11,null],[13,"HSV2RGB","","",11,null],[13,"Lab2BGR","","",11,null],[13,"Lab2RGB","","",11,null],[13,"Luv2BGR","","",11,null],[13,"Luv2RGB","","",11,null],[13,"HLS2BGR","","",11,null],[13,"HLS2RGB","","",11,null],[13,"BGR2HSV_FULL","","",11,null],[13,"RGB2HSV_FULL","","",11,null],[13,"BGR2HLS_FULL","","",11,null],[13,"RGB2HLS_FULL","","",11,null],[13,"HSV2BGR_FULL","","",11,null],[13,"HSV2RGB_FULL","","",11,null],[13,"HLS2BGR_FULL","","",11,null],[13,"HLS2RGB_FULL","","",11,null],[13,"LBGR2Lab","","",11,null],[13,"LRGB2Lab","","",11,null],[13,"LBGR2Luv","","",11,null],[13,"LRGB2Luv","","",11,null],[13,"Lab2LBGR","","",11,null],[13,"Lab2LRGB","","",11,null],[13,"Luv2LBGR","","",11,null],[13,"Luv2LRGB","","",11,null],[13,"BGR2YUV","","",11,null],[13,"RGB2YUV","","",11,null],[13,"YUV2BGR","","",11,null],[13,"YUV2RGB","","",11,null],[13,"YUV2RGB_NV12","","",11,null],[13,"YUV2BGR_NV12","","",11,null],[13,"YUV2RGB_NV21","","",11,null],[13,"YUV2BGR_NV21","","",11,null],[13,"YUV2RGBA_NV12","","",11,null],[13,"YUV2BGRA_NV12","","",11,null],[13,"YUV2RGBA_NV21","","",11,null],[13,"YUV2BGRA_NV21","","",11,null],[13,"YUV2RGB_YV12","","",11,null],[13,"YUV2BGR_YV12","","",11,null],[13,"YUV2RGB_IYUV","","",11,null],[13,"YUV2BGR_IYUV","","",11,null],[13,"YUV2RGBA_YV12","","",11,null],[13,"YUV2BGRA_YV12","","",11,null],[13,"YUV2RGBA_IYUV","","",11,null],[13,"YUV2BGRA_IYUV","","",11,null],[13,"YUV2GRAY_420","","",11,null],[13,"YUV2RGB_UYVY","","",11,null],[13,"YUV2BGR_UYVY","","",11,null],[13,"YUV2RGBA_UYVY","","",11,null],[13,"YUV2BGRA_UYVY","","",11,null],[13,"YUV2RGB_YUY2","","",11,null],[13,"YUV2BGR_YUY2","","",11,null],[13,"YUV2RGB_YVYU","","",11,null],[13,"YUV2BGR_YVYU","","",11,null],[13,"YUV2RGBA_YUY2","","",11,null],[13,"YUV2BGRA_YUY2","","",11,null],[13,"YUV2RGBA_YVYU","","",11,null],[13,"YUV2BGRA_YVYU","","",11,null],[13,"YUV2GRAY_UYVY","","",11,null],[13,"YUV2GRAY_YUY2","","",11,null],[13,"RGBA2mRGBA","","",11,null],[13,"mRGBA2RGBA","","",11,null],[13,"RGB2YUV_I420","","",11,null],[13,"BGR2YUV_I420","","",11,null],[13,"RGBA2YUV_I420","","",11,null],[13,"BGRA2YUV_I420","","",11,null],[13,"RGB2YUV_YV12","","",11,null],[13,"BGR2YUV_YV12","","",11,null],[13,"RGBA2YUV_YV12","","",11,null],[13,"BGRA2YUV_YV12","","",11,null],[13,"BayerBG2BGR","","",11,null],[13,"BayerGB2BGR","","",11,null],[13,"BayerRG2BGR","","",11,null],[13,"BayerGR2BGR","","",11,null],[13,"BayerBG2GRAY","","",11,null],[13,"BayerGB2GRAY","","",11,null],[13,"BayerRG2GRAY","","",11,null],[13,"BayerGR2GRAY","","",11,null],[13,"BayerBG2BGR_VNG","","",11,null],[13,"BayerGB2BGR_VNG","","",11,null],[13,"BayerRG2BGR_VNG","","",11,null],[13,"BayerGR2BGR_VNG","","",11,null],[13,"BayerBG2BGR_EA","","",11,null],[13,"BayerGB2BGR_EA","","",11,null],[13,"BayerRG2BGR_EA","","",11,null],[13,"BayerGR2BGR_EA","","",11,null],[13,"COLORCVT_MAX","","",11,null],[4,"InterpolationFlag","","Interpolation algorithm",null,null],[13,"InterNearst","","nearest neighbor interpolation",12,null],[13,"InterLinear","","bilinear interpolation",12,null],[13,"InterCubic","","bicubic interpolation",12,null],[13,"InterArea","","resampling using pixel area relation. It may be a preferred method for\nimage decimation, as it gives moire&#39;-free results. But when the image is\nzoomed, it is similar to the INTER_NEAREST method.",12,null],[13,"InterLanczos4","","Lanczos interpolation over 8x8 neighborhood",12,null],[13,"InterMax","","mask for interpolation codes",12,null],[13,"WarpFillOutliers","","flag, fills all of the destination image pixels. If some of them\ncorrespond to outliers in the source image, they are set to zero",12,null],[13,"WarpInverseMap","","flag, inverse transformation",12,null],[11,"fmt","","",11,null],[11,"eq","","",11,null],[11,"clone","","",11,null],[11,"fmt","","",12,null],[11,"eq","","",12,null],[11,"clone","","",12,null],[11,"rectangle","cv","Draws a simple, thick, or filled up-right rectangle.",0,null],[11,"rectangle_custom","","Draws a simple, thick, or filled up-right rectangle.",0,null],[11,"rectangle2f","","Draw a simple, thick, or filled up-right rectangle.",0,null],[11,"cvt_color","","Convert an image from one color space to another.",0,null],[11,"pyr_down","","Blurs an image and downsamples it. This function performs the\ndownsampling step of the Gaussian pyramid construction.",0,null],[11,"resize_to","","Resizes an image.",0,null],[11,"resize_by","","Resizes an image.",0,null],[11,"calc_hist","","Calculate a histogram of an image.",0,null],[11,"calc_back_project","","Calculate the back projection of a histogram. The function calculates\nthe back project of the histogram.",0,null],[0,"imgcodecs","","Image file reading and writing, see [OpenCV\nimgcodecs](http://docs.opencv.org/3.1.0/d4/da8/group__imgcodecs.html).",null,null],[4,"ImreadModes","cv::imgcodecs","ImreadModes",null,null],[13,"ImreadUnchanged","","If set, return the loaded image as is (with alpha channel, otherwise it\ngets cropped",13,null],[13,"ImreadGrayscale","","If set, always convert image to the single channel grayscale image.",13,null],[13,"ImreadColor","","If set, always convert image to the 3 channel BGR color image.",13,null],[13,"ImreadAnydepth","","If set, return 16-bit/32-bit image when the input has the corresponding\ndepth, otherwise convert it to 8-bit.",13,null],[13,"ImreadAnycolor","","If set, the image is read in any possible color format.",13,null],[13,"ImreadLoadGdal","","If set, use the gdal driver for loading the image.",13,null],[13,"ImreadReducedGrayscale2","","If set, always convert image to the single channel grayscale image and\nthe image size reduced 1/2.",13,null],[13,"ImreadReducedColor2","","If set, always convert image to the 3 channel BGR color image and the\nimage size reduced 1/2.",13,null],[13,"ImreadReducedGrayscale4","","If set, always convert image to the single channel grayscale image and\nthe image size reduced 1/4.",13,null],[13,"ImreadReducedColor4","","If set, always convert image to the 3 channel BGR color image and the\nimage size reduced 1/4.",13,null],[13,"ImreadReducedGrayscale8","","If set, always convert image to the single channel grayscale image and\nthe image size reduced 1/8.",13,null],[13,"ImreadReducedColor8","","If set, always convert image to the 3 channel BGR color image and the\nimage size reduced 1/8.",13,null],[4,"ImwriteFlags","","Imwrite flags",null,null],[13,"ImwriteJpegQuality","","For JPEG, it can be a quality from 0 to 100 (the higher is the\nbetter). Default value is 95.",14,null],[13,"ImwriteJpegProgressive","","Enable JPEG features, 0 or 1, default is False.",14,null],[13,"ImwriteJpegOptimize","","Enable JPEG features, 0 or 1, default is False.",14,null],[13,"ImwriteJpegRstInterval","","JPEG restart interval, 0 - 65535, default is 0 - no restart.",14,null],[13,"ImwriteJpegLumaQuality","","Separate luma quality level, 0 - 100, default is 0 - don&#39;t use.",14,null],[13,"ImwriteJpegChromaQuality","","Separate chroma quality level, 0 - 100, default is 0 - don&#39;t use.",14,null],[13,"ImwritePngCompression","","For PNG, it can be the compression level from 0 to 9. A higher value\nmeans a smaller size and longer compression time. Default value is\n3. Also strategy is changed to IMWRITE_PNG_STRATEGY_DEFAULT\n(Z_DEFAULT_STRATEGY).",14,null],[13,"ImwritePngStrategy","","One of cv::ImwritePNGFlags, default is IMWRITE_PNG_STRATEGY_DEFAULT.",14,null],[13,"ImwritePngBilevel","","Binary level PNG, 0 or 1, default is 0.",14,null],[13,"ImwritePxmBinary","","For PPM, PGM, or PBM, it can be a binary format flag, 0 or 1. Default\nvalue is 1.",14,null],[13,"ImwriteWebpQuality","","For WEBP, it can be a quality from 1 to 100 (the higher is the\nbetter). By default (without any parameter) and for quality above 100\nthe lossless compression is used.",14,null],[13,"ImwritePamTupletype","","For PAM, sets the TUPLETYPE field to the corresponding string value that\nis defined for the format",14,null],[4,"ImwritePngFlags","","Imwrite PNG flag",null,null],[13,"ImwritePngStrategyDefault","","Use this value for normal data.",15,null],[13,"ImwritePngStrategyFiltered","","Use this value for data produced by a filter (or predictor).Filtered\ndata consists mostly of small values with a somewhat random\ndistribution. In this case, the compression algorithm is tuned to\ncompress them better.",15,null],[13,"ImwritePngStrategyHuffmanOnly","","Use this value to force Huffman encoding only (no string match).",15,null],[13,"ImwritePngStrategyRle","","Use this value to limit match distances to one (run-length encoding).",15,null],[13,"ImwritePngStrategyFixed","","Using this value prevents the use of dynamic Huffman codes, allowing for\na simpler decoder for special applications.",15,null],[11,"fmt","","",13,null],[11,"eq","","",13,null],[11,"clone","","",13,null],[11,"fmt","","",14,null],[11,"eq","","",14,null],[11,"clone","","",14,null],[11,"fmt","","",15,null],[11,"eq","","",15,null],[11,"clone","","",15,null],[11,"imdecode","cv","Decodes an image from `buf` according to the specified mode.",0,null],[11,"imencode","","Encodes an image; the encoding scheme depends on the extension provided;\nadditional write flags can be passed in using a vector. If successful,\nreturns an owned vector of the encoded image.",0,null],[0,"videoio","","Media I/O, see [OpenCV\nvideoio](http://docs.opencv.org/3.1.0/dd/de7/group__videoio.html)",null,null],[3,"VideoCapture","cv::videoio","Video capturing from video files, image sequences or cameras.",null,null],[3,"VideoWriter","","`VideoWriter` provides easy access to write videos to files.\n- On Linux FFMPEG is used to write videos;\n- On Windows FFMPEG or VFW is used;\n- On MacOSX QTKit is used.",null,null],[4,"CapProp","","Video capture&#39;s property identifier.",null,null],[13,"PosMsec","","Current position of the video file in milliseconds or video capture\ntimestamp.",16,null],[13,"PosFrames","","0-based index of the frame to be decoded/captured next.",16,null],[13,"PosAviRatio","","Relative position of the video file: 0 - start of the film, 1 - end of\nthe film.",16,null],[13,"FrameWidth","","Width of the frames in the video stream.",16,null],[13,"FrameHeight","","Height of the frames in the video stream.",16,null],[13,"Fps","","Frame rate.",16,null],[13,"Fourcc","","4-character code of codec.",16,null],[13,"FrameCount","","Number of frames in the video file.",16,null],[13,"Format","","Format of the Mat objects returned by retrieve() .",16,null],[13,"Mode","","Backend-specific value indicating the current capture mode.",16,null],[13,"Brightness","","Brightness of the image (only for cameras).",16,null],[13,"Contrast","","Contrast of the image (only for cameras).",16,null],[13,"Saturation","","Saturation of the image (only for cameras).",16,null],[13,"Hue","","Hue of the image (only for cameras).",16,null],[13,"Gain","","Gain of the image (only for cameras).",16,null],[13,"Exposure","","Exposure (only for cameras).",16,null],[13,"ConvertRgb","","Boolean flags indicating whether images should be converted to RGB.",16,null],[13,"WhiteBalanceBlueU","","Currently not supported",16,null],[13,"Rectification","","Rectification flag for stereo cameras (note: only supported by DC1394 v\n2.x backend currently)",16,null],[13,"Monochrome","","",16,null],[13,"Sharpness","","",16,null],[13,"AutoExposure","","",16,null],[13,"Gamma","","",16,null],[13,"Temperature","","",16,null],[13,"Trigger","","",16,null],[13,"TriggerDelay","","",16,null],[13,"WhiteBalanceRedV","","",16,null],[13,"Zoom","","",16,null],[13,"Focus","","",16,null],[13,"Guid","","",16,null],[13,"IsoSpeed","","",16,null],[13,"Backlight","","",16,null],[13,"Pan","","",16,null],[13,"Tilt","","",16,null],[13,"Roll","","",16,null],[13,"Iris","","",16,null],[13,"Settings","","",16,null],[13,"Buffersize","","",16,null],[13,"Autofocus","","",16,null],[4,"VideoWriterProperty","","`VideoWriter`&#39;s property identifier.",null,null],[13,"Quality","","Current quality of the encoded videostream.",17,null],[13,"FrameBytes","","(Read-only) Size of just encoded video frame; note that the encoding\norder may be different from representation order.",17,null],[13,"NStripes","","Number of stripes for parallel encoding",17,null],[5,"fourcc","","Converts from [four character code](https://www.fourcc.org/) to `i32` for\nOpenCV.",null,{"inputs":[{"name":"char"},{"name":"char"},{"name":"char"},{"name":"char"}],"output":{"name":"i32"}}],[5,"codec_name","","Converts from OpenCV&#39;s int to [four character\ncode](https://www.fourcc.org/).",null,{"inputs":[{"name":"i32"}],"output":{"name":"option"}}],[11,"fmt","","",18,null],[11,"fmt","","",16,null],[11,"clone","","",16,null],[11,"eq","","",16,null],[11,"hash","","",16,null],[11,"new","","Creates a capture device with specified camera id. If there is a single\ncamera connected, just pass 0.",18,{"inputs":[{"name":"i32"}],"output":{"name":"self"}}],[11,"from_path","","Creates a capture device with the path of a video file (eg. video.avi).\nThis also supports image sequence, eg. img_%02d.jpg, which will read\nsamples like img_00.jpg, img_01.jpg, img_02.jpg, ...).",18,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"is_open","","Returns true if video capturing has been initialized already.",18,null],[11,"read","","Grabs, decodes and returns the next video frame. `read` combines\n`VideoCapture::grab` and `VideoCapture::retrieve` in one call. This is\nthe most convenient method for reading video files or capturing data\nfrom decode and return the just grabbed frame.",18,null],[11,"set","","Sets a property in the `VideoCapture`.",18,null],[11,"get","","Gets a property in the `VideoCapture`.",18,null],[11,"drop","","",18,null],[11,"fmt","","",19,null],[11,"new","","`VideoWriter` constructor.\n* path – Name of the output video file.\n* fourcc – 4-character code of codec used to compress the frames. For\n  example, VideoWriter::fourcc(&#39;P&#39;,&#39;I&#39;,&#39;M&#39;,&#39;1&#39;) is a MPEG-1 codec,\n  VideoWriter::fourcc(&#39;M&#39;,&#39;J&#39;,&#39;P&#39;,&#39;G&#39;) is a motion-jpeg codec etc. List\n  of codes can be obtained at Video Codecs by FOURCC page.\n* fps – Framerate of the created video stream.\n* frame_size – Size of the video frames.\n* is_color – If it is not zero, the encoder will expect and encode color\n  frames, otherwise it will work with grayscale frames (the flag is\n  currently supported on Windows only).",19,{"inputs":[{"name":"str"},{"name":"i32"},{"name":"f64"},{"name":"size2i"},{"name":"bool"}],"output":{"name":"videowriter"}}],[11,"open","","`VideoWriter` constructor.\n* path – Name of the output video file.\n* fourcc – 4-character code of codec used to compress the frames. For\n  example, VideoWriter::fourcc(&#39;P&#39;,&#39;I&#39;,&#39;M&#39;,&#39;1&#39;) is a MPEG-1 codec,\n  VideoWriter::fourcc(&#39;M&#39;,&#39;J&#39;,&#39;P&#39;,&#39;G&#39;) is a motion-jpeg codec etc. List\n  of codes can be obtained at Video Codecs by FOURCC page.\n* fps – Framerate of the created video stream.\n* frame_size – Size of the video frames.\n* is_color – If it is not zero, the encoder will expect and encode color\n  frames, otherwise it will work with grayscale frames (the flag is\n  currently supported on Windows only).",19,null],[11,"write","","Writes the specified image to video file. It must have the same size as\nhas been specified when opening the video writer.",19,null],[11,"is_open","","Returns true if video writer has been initialized already.",19,null],[11,"set","","Sets a property in the `VideoWriter`.\nNote: `VideoWriterProperty::FrameBytes` is read-only.",19,null],[11,"get","","Gets a property in the `VideoWriter`.",19,null],[11,"default","","",19,{"inputs":[],"output":{"name":"videowriter"}}],[11,"drop","","",19,null],[11,"fmt","","",17,null],[11,"clone","","",17,null],[11,"eq","","",17,null],[11,"hash","","",17,null],[0,"highgui","cv","highgui: high-level GUI",null,null],[4,"WindowFlags","cv::highgui","Flags for [highgui_named_window](fn.highgui_named_window.html). This only\nsupports a subset of all cv::WindowFlags because C/C++ allows enum with the\nsame value but Rust is stricter.",null,null],[13,"WindowNormal","","the window can be resized (no constraint) or switched to fullscreen.",20,null],[13,"WindowAutosize","","the window is constrained by the image displayed.",20,null],[13,"WindowOpengl","","the window is with opengl support.",20,null],[13,"WindowFreeRatio","","the window can be resized arbitrarily (no ratio constraint).",20,null],[4,"MouseEventTypes","","Mouse Events",null,null],[13,"MouseMove","","Indicates that the mouse has moved over the window.",21,null],[13,"LButtonDown","","Indicates that the left mouse button is pressed.",21,null],[13,"RButtonDown","","Indicates that the right mouse button is pressed.",21,null],[13,"MButtonDown","","Indicates that the middle mouse button is pressed.",21,null],[13,"LButtonUp","","Indicates that left mouse button is released.",21,null],[13,"RButtonUp","","Indicates that right mouse button is released.",21,null],[13,"MButtonUp","","Indicates that middle mouse button is released.",21,null],[13,"LButtonClick","","Indicates that left mouse button is double clicked.",21,null],[13,"RButtonClick","","Indicates that right mouse button is double clicked.",21,null],[13,"MButtonClick","","Indicates that middle mouse button is double clicked.",21,null],[13,"MouseWheel","","Positive/negative means forward/backward scrolling.",21,null],[13,"MouseHWheel","","Positive/negative means right and left scrolling.",21,null],[5,"highgui_named_window","","Create a window that can be used as a placeholder for images and\ntrackbars. All created windows are referred to by their names. If a window\nwith the same name already exists, the function does nothing.",null,{"inputs":[{"name":"str"},{"name":"windowflags"}],"output":null}],[5,"highgui_destroy_window","","Destroy the specified window with the given name.",null,{"inputs":[{"name":"str"}],"output":null}],[5,"highgui_set_mouse_callback","","Set mouse handler for the specified window (identified by name). A callback\nhandler should be provided and optional user_data can be passed around.",null,null],[6,"MouseCallbackData","","Pointer referring to the data used in MouseCallback",null,null],[6,"MouseCallback","","Callback function for mouse events, primarily used in\n[highgui_set_mouse_callback](fn.highgui_set_mouse_callback.html)",null,null],[11,"clone","","",20,null],[11,"fmt","","",20,null],[11,"clone","","",21,null],[11,"fmt","","",21,null],[0,"video","cv","Video Analysis, see [OpenCV\nvideo](http://docs.opencv.org/3.1.0/d7/de9/group__video.html)",null,null],[0,"tracking","cv::video","Object Tracking, see [OpenCV video\ntrack](http://docs.opencv.org/3.1.0/dc/d6b/group__video__track.html)",null,null],[3,"TermCriteria","cv::video::tracking","Termination criteria for iterative algorithms.",null,null],[4,"TermType","","Term criteria type, can be one of: Count, Eps or Count + Eps",null,null],[13,"Count","","The maximum number of iterations or elements to compute",22,null],[13,"EPS","","the desired accuracy or change in parameters at which the iterative\nalgorithm stops.",22,null],[11,"clone","","",22,null],[11,"fmt","","",22,null],[11,"fmt","","",23,null],[11,"new","","Creates a new termination criteria.",23,{"inputs":[{"name":"termtype"},{"name":"i32"},{"name":"f64"}],"output":{"name":"self"}}],[11,"drop","","",23,null],[11,"camshift","cv","Finds an object center, size, and orientation; returns as `RotatedRect`.",0,null],[0,"analysis","cv::video","Motion Analysis, see [OpenCV video\nmotion](http://docs.cv.org/3.1.0/de/de1/group__video__motion.html)",null,null],[0,"objdetect","cv","Various object detection algorithms, such as Haar feature-based cascade\nclassifier for object detection and histogram of oriented gradients (HOG).",null,null],[3,"CascadeClassifier","cv::objdetect","Cascade classifier class for object detection.",null,null],[3,"SvmDetector","","SvmDetector",null,null],[12,"inner","","Pointer to the inner data structure",24,null],[3,"HogParams","","Parameters that controls the behavior of HOG",null,null],[12,"win_size","","Detection window size. Align to block size and block stride",25,null],[12,"block_size","","Block size in pixels. Align to cell size. Only (16,16) is supported for now.",25,null],[12,"block_stride","","Block stride. It must be a multiple of cell size.",25,null],[12,"cell_size","","Cell size. Only (8, 8) is supported for now.",25,null],[12,"nbins","","Number of bins. Only 9 bins per cell are supported for now.",25,null],[12,"win_sigma","","Gaussian smoothing window parameter.",25,null],[12,"l2hys_threshold","","L2-Hys normalization method shrinkage.",25,null],[12,"gamma_correction","","Flag to specify whether the gamma correction preprocessing is required or not.",25,null],[12,"nlevels","","Maximum number of detection window increases.",25,null],[12,"hit_threshold","","Threshold for the distance between features and SVM classifying\nplane. Usually it is 0 and should be specfied in the detector\ncoefficients (as the last free coefficient). But if the free coefficient\nis omitted (which is allowed), you can specify it manually here.",25,null],[12,"win_stride","","Window stride. It must be a multiple of block stride.",25,null],[12,"padding","","Padding",25,null],[12,"scale","","Coefficient of the detection window increase.",25,null],[12,"group_threshold","","Coefficient to regulate the similarity threshold. When detected, some\nobjects can be covered by many rectangles. 0 means not to perform\ngrouping.",25,null],[3,"HogDescriptor","","`HogDescriptor` implements Histogram of Oriented Gradients.",null,null],[12,"params","","Hog parameters.",26,null],[4,"CSvmDetector","","Opaque type for C/C++ SvmDetector object",null,null],[8,"ObjectDetect","","An object detect trait.",null,null],[10,"detect","","Detects the object inside this image and returns a list of detections\nwith their confidence.",27,null],[11,"fmt","","",28,null],[11,"detect","","",28,null],[11,"new","","Creates a cascade classifier, uninitialized. Before use, call load.",28,{"inputs":[],"output":{"name":"cascadeclassifier"}}],[11,"from_path","","Creates a cascade classifier using the model specified.",28,{"inputs":[{"name":"p"}],"output":{"name":"option"}}],[11,"load","","Loads the classifier model from a path.",28,null],[11,"detect_multiscale","","The default detection uses scale factor 1.1, minNeighbors 3, no min size\nor max size.",28,null],[11,"detect_with_params","","Detects the object using parameters specified.",28,null],[11,"drop","","",28,null],[11,"fmt","","",29,null],[11,"clone","","",29,null],[11,"fmt","","",24,null],[11,"default_people_detector","","The built-in people detector.",24,{"inputs":[],"output":{"name":"svmdetector"}}],[11,"daimler_people_detector","","Returns the Daimler people detector.",24,{"inputs":[],"output":{"name":"svmdetector"}}],[11,"drop","","",24,null],[11,"fmt","","",25,null],[11,"clone","","",25,null],[11,"default","","",25,{"inputs":[],"output":{"name":"hogparams"}}],[11,"fmt","","",26,null],[11,"default","","",26,{"inputs":[],"output":{"name":"hogdescriptor"}}],[11,"detect","","",26,null],[11,"with_params","","Creates a HogDescriptor with provided parameters.",26,{"inputs":[{"name":"hogparams"}],"output":{"name":"hogdescriptor"}}],[11,"set_svm_detector","","Sets the SVM detector.",26,null],[11,"drop","","",26,null]],"paths":[[3,"Mat"],[3,"Point2f"],[3,"Point2i"],[3,"Rect"],[3,"Size2f"],[3,"Size2i"],[4,"CvType"],[4,"FlipCode"],[4,"LineTypes"],[4,"NormTypes"],[3,"Scalar"],[4,"ColorConversionCodes"],[4,"InterpolationFlag"],[4,"ImreadModes"],[4,"ImwriteFlags"],[4,"ImwritePngFlags"],[4,"CapProp"],[4,"VideoWriterProperty"],[3,"VideoCapture"],[3,"VideoWriter"],[4,"WindowFlags"],[4,"MouseEventTypes"],[4,"TermType"],[3,"TermCriteria"],[3,"SvmDetector"],[3,"HogParams"],[3,"HogDescriptor"],[8,"ObjectDetect"],[3,"CascadeClassifier"],[4,"CSvmDetector"]]};
initSearch(searchIndex);
