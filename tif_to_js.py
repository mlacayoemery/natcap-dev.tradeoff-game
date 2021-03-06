import gdal
import os
import sys


FILES = [
    'pts_agcarb.tif', 'pts_agrec.tif', 'pts_crop_ag.tif', 'pts_pscarb.tif',
    'pts_psrec.tif', 'pts_aghq.tif', 'pts_agwq.tif', 'pts_past_ps.tif',
    'pts_pshq.tif', 'pts_pswq.tif']


for filename in FILES:
    ds = gdal.Open(filename)
    band = ds.GetRasterBand(1)
    array = band.ReadAsArray()

    print '// the following is automatically generated by tif_to_js.py and converts the gis file %s to javascript' % filename
    print 'var %s = ' % os.path.basename(filename),
    for row_index in xrange(band.YSize):
        sys.stdout.write('[')
        print '%s' % str(list(array[row_index])),
        sys.stdout.write(']')
        if row_index < band.YSize -1:
            print ',', 
        else:
            print ';'
